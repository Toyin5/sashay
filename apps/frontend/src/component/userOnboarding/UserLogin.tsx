// import './AdminLogin.css'
import { CiFaceSmile } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const navigate = useNavigate()

  return (
    <div className='AdminLogin_Main'>
      <div className='AdminLogin_Left'>
        <div className='AdminSignup2_Logo_Wrap' style={{ width: '80%', height: '10%', display: 'flex', alignItems: 'center' }} onClick={()=>navigate('/')} >
          <img src='./Logo.svg' alt='logo' />
        </div>
        <div className='AdminLogin_Left_Wrap'>
          <h2>Sign In to Your Account</h2>
          <form className='AdminLogin_Form'>
            <label className='AdminLogin_Email_Wrap'>
              <p>Email</p>
              <input placeholder='example@gmail.com' className='AdminLogin_Email_Input' />
            </label>
            <label className='AdminLogin_Email_Wrap'>
              <input placeholder='Password' className='AdminLoginPassword_Input' />
            </label>
            <div className='AdminLogin_Forgot_Remeberme'>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily:'Quicksand' }}>
                <input type="checkbox" />
                <p>Remember me</p>
              </span>
              <p style={{fontFamily:'Quicksand', cursor:'pointer'}} onClick={()=>navigate('/user_forgotpassword')}>Forgot Password</p>
            </div>
            <p onClick={()=>navigate('/usersignup')}style={{fontFamily:'Quicksand', color:'#253d35'}} className='AdminLoginDont_HaveACcount'>Don't have an account? Sign up here</p>
            <div>
              <button className='Admin_login_signin_button'>Sign in</button>
            </div>
            <span className='AdminLogin_Terms_Condition'>
              <p>Privacy</p>
              <p>x</p>
              <p>Terms an condition</p>
            </span>
          </form>
        </div>
      </div>
      <div className='AdminLogin_Right'>
        <div className='AdminLogin_Right_Wrap'>
          <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '20px', color: 'white', cursor: 'pointer' }}>
            <IoIosArrowRoundBack />
            <p>Back</p>
          </div>
          <div className='AdminLogin_Key_Image'>
            <img src='./loginkey.svg' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className='LoginGreetings'>Welcome Back!</p>
            <CiFaceSmile className='AdminLoginSmiley' />
          </div>
          <p className='AdminLogin_Explanation'>We’re glad to have you join us...again.
          </p>
          <div className='AdminLogin_Dont_have_account '>
            <p>Don't have an account?</p>
            <button onClick={() => navigate('/usersignup')}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin