import { useNavigate } from 'react-router-dom';
import './AdminSignup.css'
import { IoIosArrowRoundBack } from "react-icons/io";
function AdminSignup2() {
    const navigate = useNavigate()
    return (
        <div className='AdminSignup2_Main'>
            <div className='AdminSIgnupImg_Header'>
                <img src="./Logo.svg" alt='logo' />
                <div className='AdminSignupimg_Goback_Arrow' onClick={() => navigate('/adminsignup')}>
                    <IoIosArrowRoundBack style={{ color: '#253D35', width: '40px', height: '40px' }} />
                    <p>Go Back</p>
                </div>
            </div>
            <div className='AdminSignup2_Body'>
                <div className='Adminsignup2_Left'>
                    <div className='AdminSignup2_Left_img_wrap'>
                        <img src="./personal.svg" alt="" />
                    </div>
                    <span className='AdminLogin_Terms_Condition'>
                        <p>Privacy</p>
                        <p>x</p>
                        <p>Terms an condition</p>
                    </span>
                </div>
                <div className='AdminSignup2Right'>
                    <h2>Personal Details</h2>
                    <p style={{ marginBottom: '20px' }}>We just need you to fill in some details. </p>
                    <form className='AdminSignup2_Form'>
                        <label className='AdminSignup2_Label_Username'>
                            <p>First Name</p>
                            <input placeholder='Firstname' />
                        </label>
                        <label className='AdminSignup2_Label_Username'>
                            <p>Last Name</p>
                            <input placeholder='Lastname' />
                        </label>
                        <label className='AdminSignup2_Label_PhoneNumber'>
                            <div className='AdminSignup2_PhoneNumber_Wrap'>
                                <p>+234</p>
                                <input placeholder='Phone number' className='AdminSignup2PhoneNumber'/>
                            </div>
                        </label>
                        <div className='AdminSignup2_next_button_wrap'>
                            <button className='AdminSignup2_next_button' onClick={() => navigate('/adminsignup3')}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminSignup2