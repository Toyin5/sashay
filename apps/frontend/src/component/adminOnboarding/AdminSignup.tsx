import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import './AdminSignup.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useForm } from 'react-hook-form'
import { AdminSignupValue } from '../interfaces/AdminSignup.type';
import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { AdminsignUpSchema } from '../schema/AdminsignupSchema';
function AdminSignup() {
  const navigate = useNavigate()

  // const date = new Date(new Date().toISOString().split('T')[0])
  const form = useForm<AdminSignupValue>({
    defaultValues: {
      email: '',
      password: '',
      date: ''
    },
    resolver: yupResolver<any>(AdminsignUpSchema)
  });
  const { register, handleSubmit, formState: { errors } } = form;

  const submit = (data: AdminSignupValue) => {
    localStorage.setItem('adminData', JSON.stringify(data));
    console.log('form submitted successfully', data)
    navigate('/adminsignup2')
  }
  return (
    <div className='AdminLogin_Main'>
      <div className='AdminSignup_Left'>
        <div className='AdminSignup2_Logo_Wrap' style={{ width: '80%', height: '10%', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/')}>
          <img src='./Logo.svg' alt='logo' />
        </div>
        <div className='AdminLogin_Left_Wrap'>
          <h2>Create a Vendor Account</h2>
          <form className='AdminLogin_Form' onSubmit={handleSubmit(submit)} noValidate>
            <label className='AdminLogin_Email_Wrap'>
              <p>Email</p>
              <input
                placeholder='example@gmail.com'
                className='AdminLogin_Email_Input'
                {...register('email')}
              />
              <b className='adminLogin_error_msg'>{errors.email?.message}</b>
            </label>
            <label className='AdminLogin_Email_Wrap'>
              <input
                placeholder='Password'
                className='AdminLoginPassword_Input'
                type='password'
                {...register('password')}
              />
              <b className='adminLogin_error_msg'>{errors.password?.message}</b>
            </label>
            <label className='AdminLogin_Email_Wrap'>
              <input
                className='AdminLoginPassword_Input'
                type='Date'
                {...register('date')}
              />
              <b className='adminLogin_error_msg'>{errors.date && errors.date?.message}</b>
            </label>
            <div className='AdminLogin_Forgot_Remeberme'>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="checkbox" />
                <p>Remember me</p>
              </span>
            </div>
            <div>
              <button className='Admin_login_signin_button'onClick={handleSubmit(submit)} >Proceed</button>
              {/* <button className='Admin_login_signin_button' onClick={() => { console.log('Button clicked'); navigate('/adminsignup2'); }}>Proceed</button> */}
            </div>
            <span className='AdminLogin_Terms_Condition'>
              <p>Privacy</p>
              <p>x</p>
              <p>Terms an condition</p>
            </span>
          </form>
        </div>
      </div>
      <div className='AdminSignup_Right'>
        <div className='AdminLogin_Right_Wrap'>
          <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '20px', color: 'white', cursor: 'pointer' }}>
            <IoIosArrowRoundBack />
            <p>Go Back</p>
          </div>
          <div className='AdminLogin_Key_Image'>
            <img src='./loginkey.svg' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className='LoginGreetings'>Hello Vendor!</p>
            {/* <CiFaceSmile className='AdminLoginSmiley' /> */}
          </div>
          <p className='AdminLogin_Explanation'>You’re one step away from <br />
            starting a remarkable journey <br />
            with us!
          </p>
          <div className='AdminLogin_Dont_have_account '>
            <p>Already have an account?</p>
            <button onClick={() => navigate('/adminlogin')}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSignup