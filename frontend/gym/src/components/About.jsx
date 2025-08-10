import React from 'react'
import aboutimg from '../assets/aboutimg.jpg'
import aboutimg1 from '../assets/aboutimg1.png'
import aboutimg2 from '../assets/aboutimg2.jpg'
const About = () => {
  return <>
  <div style={{
            backgroundImage: `linear-gradient(rgba(60, 58, 62, 0.85), rgba(71, 68, 72, 0.85)),  url(${aboutimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '3rem 0 2rem 0',
            width: '100%',
            height:'400px',
            marginTop: '2rem',
            textAlign:'center',
            letterSpacing:'3px'
            
        }}>
          <div>
          <h1 className='container text-warning mt-5'>ABOUT GYMNEST</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-file-earmark-person-fill text-primary" viewBox="0 0 16 10">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
</svg>
</div>
  </div>

  <div className='section mt-5'>
    <div className='container'
    style={{
      height:'300px ',
      backgroundColor:'rgb(250,240,0)',
      maxWidth:'100%',
      textAlign:'center',
      fontFamily:'fantasy',
      letterSpacing:'3px',
      
    }}>
      <h3>GYMNEST</h3>
      <img src={aboutimg1} alt="" style={{
        width:'500px',
        margin:'2rem'
      }} />
    </div>
    <div style={{
      backgroundColor:'white',
      height:'200px'
    }}>

    </div>
  </div>

  <div className='d-flex justify-content-around' style={{
    backgroundImage: `linear-gradient(rgba(60, 58, 62, 0.85), rgba(71, 68, 72, 0.85)),  url(${aboutimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className='text bg-light' style={{
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      padding:'2rem',
      width:'45%',
      margin:'2rem'
    }}>
      <h3
      style={{
        backgroundColor:'rgb(0,0,0)',
      textAlign:'center',
      color:'white'
      }}>What We Do</h3>
      <p style={{
        textAlign:'justify',
        padding:'15px',
      }}>GymNest Has Been The Authority In Fitness Since 2024 Dating Back To The Original Gym . It Was The Place For Serious Fitness. Opened Long Before The Modern-Day Health Club Existed, The Original GymNest Featured Homemade Equipment And A Dedication To Getting Results. It Was An Instant Hit. GymNest Quickly Became Known As “The Mecca Of Bodybuilding.''
In 2025, GymNest Received International Attention When It Was Featured In The Movie Pumping Iron That Starred Arnold Schwarzenegger And Lou Ferrigno. From That First Gym In India, GymNest Has Become The Largest Co-Ed Gym Chain In The World With Over 700+ Clubs In 27 Countries. Today, GymNest Has Expanded Its Fitness Profile To Offer All Of The Latest Equipment And Services, Including Group Exercise, Personal Training, Cardiovascular Equipment, Spinning, And Yoga, While Maintaining Its Core Weight Lifting Tradition.

GymNest Has Become The Preferred Gym Of Celebrities, Athletes, Bodybuilders, The Military, And Fitness Enthusiasts All Over The World. Most Importantly, GymNest Continues To Change Lives By Helping People Achieve Their Individual Potential.</p>
    </div>

    <div className='text bg-light' style={{
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      padding:'2rem',
      width:'45%',
      margin:'2rem'
    }}>
      <h3
      style={{
      backgroundColor:'rgba(219, 10, 142, 1)',
      textAlign:'center',
      color:'deepskyblue'
      }}>Why Are We Different</h3>
      <p style={{
        textAlign:'justify',
        padding:'15px'
      }}>GymNest Has Multiple Awards For Excellence Under Its Belt. GymNest Has Expanded Its Fitness Profile To Offer All Of The Latest Equipment And Services Making It The Best In The Industry. GymNest Provides A Comprehensive Approach To The Health And Wellbeing Of Its Members With Certified Trainers And Nutritional Counseling. Whether Your Goal Is To Burn Fat, Tone Or Add Muscle, Build Strength, Increase Flexibility Or Improve Your Cardiovascular Health, GymNest Lives Up To Its Reputation To Give Results. GymNest Believes That Fitness Is Not Just About A Toned Body But The Power To Overcome All The Obstacles.

We Have Programs Like Personal Training, Small Group Personal Training, Customized Goal-Based Quick Result Program, Fitness Assessment, Group Exercise Classes Such As Zumba, BollySalsa, MMA, Power Yoga, Spinning To Name A Few & Some Of Our Properties Also Include A Swimming Pool Facility And Specialized Functional & Circuit Training Areas. We Also Have As Add On A Travel Card Facility, So That Wherever You Are, Your Workout Never Stops.</p>
    </div>
  </div>

  <div className='container justify-content-center ' style={{
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      padding:'3rem',
      width:'85%',
      alignItems:'center',
      marginTop:'50px'
    }}>
      <h3
      style={{
        backgroundColor:'rgb(250,240,0)',
      textAlign:'center',
      color:'tomato'
      }}>Why Choose Us</h3>
      <p style={{
        textAlign:'justify',
        padding:'15px'
      }}>Known For The Unrivaled Success Of Providing State-Of-The-Art Equipment And Fitness Knowledge With A Globally Proven Fitness Training Module And With Certified Trainers And Nutritional Counseling We Have Had A Comprehensive Approach To The Overall Health And Wellbeing Of The Members. At GymNest, It’s Not Only About Working Out But Having A Healthy Lifestyle

We Have Also Been Doing A Lot Of Corporate & Community Wellness Programs, Reaching Out To People Who Want To Get Fitter But Cannot Make It To The Gym. We Have Focused On The Overall Experience. It Is Not Just About Getting Into A Particular Shape But It’s All About FITNESS, A Healthy Lifestyle, And, A Complete Transformation.

We Feel Proud And Glad To Say That With The Support Of GymNest International, Our Members, Employees, Vendor Partners & Franchisee Partners The Brand Has Grown Leaps And Bounds And Has Been Able To Contribute To The Betterment Of The Nation. We Are Working Towards #MakingIndiaFit And We Are Hopeful Of Spreading Fitness Awareness To As Many People As Possible</p>
      </div>

    <div  className='section p-5 mt-3 d-flex align-items-center gap-5'>
              <img
              src={aboutimg2}
              alt="data"
              style={{
                width: '400px',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
    />
    <div className="flex-grow-1" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem',
          fontWeight: 'bold',
          textAlign:'center'
        }}>Designed & Developed By GymNest</h1>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: '#444',
          marginBottom: '1.5rem'
        }}>Hola amigos! We are a bunch of curious and intellectual professionals who out of boredom from the monotonous routine, established Brand Beavers in Mumbai to emerge as problem solvers. Our team of entrepreneurs, thinkers, strategists, designers, and technologists will help you to emerge as an effective and disruptive brand all over the globe. Our brainstorming and amicable individuals go beyond their comfort zone to satisfy the customer’s requirements.
        </p>
        
        </div>
    
    
    </div>
  </>
}

export default About