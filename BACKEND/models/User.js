const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContact: { type: String },
    goal: { type: String },
    age: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
});
module.exports = mongoose.model('User',userSchema);