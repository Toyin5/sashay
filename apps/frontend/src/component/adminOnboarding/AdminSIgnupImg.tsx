import './AdminSIgnupImg.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function AdminSIgnupImg() {
  const navigate = useNavigate()

  return (
    <div className='AdminSIgnupImg_Main'>
      <div className='AdminSIgnupImg_Header'>
        <img src="./Logo.svg" alt='logo' />
        <div className='AdminSignupimg_Goback_Arrow' onClick={() => navigate('/adminsignup2')}>
          <IoIosArrowRoundBack style={{ color: '#253D35', width: '40px', height: '40px' }} />
          <p>Go Back</p>
        </div>
      </div>
      <div className='AdminSIgnupImg_Body'>
        <h2>Choose an Avatar</h2>
        <p style={{fontSize:'24px'}}>according to your gender </p>
        <div className='AdminSIgnupImg_Avatar_Wrap'>
          <img src="./male.svg" alt="" className='Avatar' />
          <img src="./female.svg" alt="" className='Avatar2' />
        </div>
        <p>or</p>
        <span style={{display:'flex', alignItems:'center', gap:'5px', marginTop:'20px'}}>
           <p>Upload your image</p>
           <p>here</p>
        </span>
        <div style={{marginTop:'20px'}}>
          <button className='AdminSignupImg_Button'>Complete Sign Up</button>
        </div>

        <span className='AdminLogin_Terms_Condition' style={{marginTop:'30px'}}>
              <p>Privacy</p>
              <p>x</p>
              <p>Terms an condition</p>
            </span>
      </div>
    </div>
  )
}

export default AdminSIgnupImg