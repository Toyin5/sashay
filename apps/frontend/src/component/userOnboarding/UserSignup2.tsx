import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { UserSignupValue } from '../interfaces/UserSignup.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { UsersignUpSchema2 } from '../schema/UserSignupSchema';
function UserSignup2() {
    const navigate = useNavigate()
    const form = useForm<UserSignupValue>({
        defaultValues: {
            userName: '',
            phoneNumber: '',
        },
        resolver: yupResolver<any>(UsersignUpSchema2)
    });
    const { register, handleSubmit, formState: { errors } } = form;

    const submit = (data: UserSignupValue) => {
        const existingDataString = localStorage.getItem('userData');
        const existingData: UserSignupValue = existingDataString ? JSON.parse(existingDataString) : {};
        const updatedData = { ...existingData, ...data };
        localStorage.setItem('userData', JSON.stringify(updatedData));
        console.log('form submitted successfully', updatedData);
        navigate('/usersignup3')
    }
    return (
        <div className='AdminSignup2_Main'>
            <div className='AdminSIgnupImg_Header'>
                <img src="./Logo.svg" alt='logo' />
                <div className='AdminSignupimg_Goback_Arrow' onClick={() => navigate('/usersignup')}>
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
                    <form className='AdminSignup2_Form' onSubmit={handleSubmit(submit)}>
                        <label className='AdminSignup2_Label_Username'>
                            <p>Username</p>
                            <input placeholder='Username' {...register('userName')} />
                            <b className='adminLogin_error_msg'>{errors.userName?.message}</b>
                        </label>
                        <label className='AdminSignup2_Label_PhoneNumber'>
                            <div className='AdminSignup2_PhoneNumber_Wrap'>
                                <p>+234</p>
                                <input placeholder='Phone number' className='AdminSignup2PhoneNumber' {...register('phoneNumber')} />
                            </div>
                            <b className='adminLogin_error_msg'>{errors.phoneNumber?.message}</b>
                        </label>
                        <div className='AdminSignup2_next_button_wrap'>
                            <button className='AdminSignup2_next_button'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserSignup2