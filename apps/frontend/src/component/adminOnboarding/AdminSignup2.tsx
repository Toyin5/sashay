import { useNavigate } from 'react-router-dom';
import './AdminSignup.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useForm } from 'react-hook-form'
import { AdminSignupValue } from '../interfaces/AdminSignup.type';
import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { Adminsignup2Schema } from '../schema/AdminsignupSchema';
import { useEffect } from 'react';
function AdminSignup2() {
    const navigate = useNavigate()

    const form = useForm<AdminSignupValue>({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: 0,
        },
        resolver: yupResolver<any>(Adminsignup2Schema)
    });
    const { register, handleSubmit, formState: { errors }, setValue } = form;

    const submit = (data: AdminSignupValue) => {
        const existingDataString = localStorage.getItem('userData');
        const existingData: AdminSignupValue = existingDataString ? JSON.parse(existingDataString) : {};
        const updatedData = { ...existingData, ...data };
        localStorage.setItem('userData', JSON.stringify(updatedData));
        console.log('form submitted successfully', updatedData);
        navigate('/adminsignup3')
    }
    useEffect(() => {
        const storedDataString = localStorage.getItem('userData');
        if (storedDataString) {
            const storedData = JSON.parse(storedDataString);
            Object.entries(storedData).forEach(([key, value]) => {
                if (key in storedData) {
                    setValue(key as keyof AdminSignupValue, value as string | number);
                }
            });
        }
    }, [setValue]);
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
                    <form className='AdminSignup2_Form' onSubmit={handleSubmit(submit)} noValidate>
                        <label className='AdminSignup2_Label_Username'>
                            <p>First Name</p>
                            <input
                                placeholder='Firstname'
                                {...register('firstName')}
                            />
                            <b className='adminLogin_error_msg'>{errors.firstName?.message}</b>
                        </label>
                        <label className='AdminSignup2_Label_Username'>
                            <p>Last Name</p>
                            <input
                                placeholder='Lastname'
                                {...register('lastName')}
                            />
                            <b className='adminLogin_error_msg'>{errors.lastName?.message}</b>
                        </label>
                        <label className='AdminSignup2_Label_PhoneNumber'>
                            <div className='AdminSignup2_PhoneNumber_Wrap'>
                                <p>+234</p>
                                <input
                                    placeholder='Phone number'
                                    className='AdminSignup2PhoneNumber'
                                    {...register('phoneNumber')}
                                />
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

export default AdminSignup2