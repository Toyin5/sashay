// import './AdminResetPassword.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from 'react';

function UserResetPassword() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const showPasswords = () => {
    setShowPassword(!showPassword);
  };
  const showPasswords2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <div className="AdminResetPassword_Main">
    <div className='AdminResetPassword_Header'>
      <img src="./Logo.svg" alt='logo' />
      <div className='Adminresetpassword_Goback_Arrow' onClick={() => navigate('/adminlogin')}>
        <IoIosArrowRoundBack style={{ color: '#253D35', width: '40px', height: '40px' }} />
        <p>Go Back</p>
      </div>
    </div>
    <div className='AdminResetPassword_Body'>
      <div className='AdminResetPassword_Body_Right'>
        <div className='AdminResetPassword_Body_Right_Wrap'>
          <h2>Reset Your Password?</h2>
          <p>Enter the e mail address associated with your<br /> account to receive a mail.</p>
          <div className='AdminResetPasswordInput_Wrap'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Enter Your New Password' className='AdminResetPassword_input'  />
            <div className="password-toggle" onClick={showPasswords}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className='AdminResetPasswordInput_Wrap'>
            <input type={showPassword2 ? 'text' : 'password'} placeholder='Confirm Your New Password' className='AdminResetPassword_input' />
            <div className="password-toggle" onClick={showPasswords2}>
              {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <p>Remember it?  Back to Login</p>
        </div>
      </div>
      <div className='AdminResetPassword_Body_Left'>
        <img src='./resetimg.svg' alt='logo' />
        <span className='AdminLogin_Terms_Condition' style={{ marginTop: '40px' }}>
          <p>Privacy</p>
          <p>x</p>
          <p>Terms an condition</p>
        </span>
      </div>
    </div>
  </div>
  )
}

export default UserResetPassword