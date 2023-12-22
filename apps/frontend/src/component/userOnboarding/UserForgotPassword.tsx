// import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function UserForgotPassword() {
  const navigate = useNavigate()
  return (
    <div className='AdminForgotPassword_Main'>
    <div className='AdminForgetPassword_Header'>
      <img src="./Logo.svg" alt='logo' />
      <div className='AdminSignupimg_Goback_Arrow' onClick={() => navigate('/adminlogin')}>
        <IoIosArrowRoundBack style={{ color: '#253D35', width: '40px', height: '40px' }} />
        <p>Go Back</p>
      </div>
    </div>
    <div className='AdminForgotPassword_Body'>
       <div className='AdminForgotPassword_Body_Left'>
          <img src='./forgotimg.svg' alt='logo'/>
          <span className='AdminLogin_Terms_Condition' style={{marginTop:'40px'}}>
            <p>Privacy</p>
            <p>x</p>
            <p>Terms an condition</p>
          </span>
       </div>
       <div className='AdminForgotPassword_Body_Right'>
        <h2>Forgot Your Password?</h2>
        <p>Enter the email address associated with your<br/> account to receive a mail.</p>
        <input type='text' placeholder='Email' className='AdminForgotPasswordInput'/>
        <p>Remember it?  Back to Login</p>
       </div>
    </div>
  </div>
  )
}

export default UserForgotPassword