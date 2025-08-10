const Razorpay = require('razorpay');
const Membership = require('../models/membership');
const razorpayInstance = require('../config/razorpay');

exports.buyMembership = async(req,res)=>{
    const{city,user,amount,email} = req.body;
 
    try {
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Invalid amount' });
        }

        const options = {
            amount: Math.round(amount * 100), // Convert to paisa and ensure it's an integer
            currency: "INR",
            receipt: `rcpt_${Date.now()}`
        };
        
        const order = await razorpayInstance.orders.create(options);
        const membership = new Membership({city,user,amount,email,razorpay_order_id:order.id});
        await membership.save();
        res.status(200).json({orderId:order.id, amount:order.amount,membershipId:membership._id});
    } catch (err) {
      res.status(400).json({message:'purchase failed', error:err.message});

    }

};

exports.verifyMembership = async(req,res)=>{
    const{razorpay_order_id,razorpay_payment_id,membershipId} = req.body;
 
    try {
        const membership = await Membership.findByIdAndUpdate(membershipId,{
            razorpay_payment_id,
            status:"paid"
        },{new:true});
        res.status(200).json({message:"payment verified", membership});
    } catch (err) {
    res.status(400).json({message:'verification failed', error:err.message});

    }

};