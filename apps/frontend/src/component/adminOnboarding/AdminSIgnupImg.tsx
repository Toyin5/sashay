import './AdminSIgnupImg.css'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { AdminSignupValue } from '../interfaces/AdminSignup.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminsignupImgSchema } from '../schema/AdminsignupSchema';
// import { useMutation } from '@tanstack/react-query';
// import { adminSignup } from '../api/Mutation';
function AdminSIgnupImg() {
  const baseStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    justifyContent: 'center'
  };

  const focusedStyle = {
    borderColor: '#2196f3'
  };

  const acceptStyle = {
    borderColor: '#00e676'
  };

  const rejectStyle = {
    borderColor: '#ff1744'
  };
  const navigate = useNavigate()

  const form = useForm<AdminSignupValue>({
    defaultValues: {
      avatar: null,
    },
    resolver: yupResolver<any>(AdminsignupImgSchema)
  });

  const { register, handleSubmit, setValue, formState: { errors } } = form;

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: any) => {
    setUploadedFiles(acceptedFiles);
    setValue('avatar', acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, open, isFocused,
    isDragAccept,
    isDragReject } = useDropzone({
      noClick: true,
      onDrop,
      accept: {
        'image/*': ['.jpeg', '.png']
      },
    });
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  // const { mutate } = useMutation(['adminSignup'], adminSignup, {
  //   onSuccess: (data: any) => {
  //     console.log(data)
  //   },
  //   onError: () => {

  //   }
  // })
  const submit = (data: AdminSignupValue) => {
    const existingDataString = localStorage.getItem('adminData');
    const existingData = existingDataString ? JSON.parse(existingDataString) : {};
    const dataWithAvatar = { ...data, avatar: uploadedFiles[0] || null };
    const updatedData = { ...existingData, ...dataWithAvatar };
    localStorage.setItem('adminData', JSON.stringify(updatedData));
    console.log('form submitted successfully', updatedData);
    setUploadedFiles([]);
    // mutate(updatedData)
    navigate('/admindashboard')
  };
  useEffect(() => {
    const storedDataString = localStorage.getItem('adminData');
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      if ('avatar' in storedData) {
        setValue('avatar', storedData['avatar']);
      }
    }
  }, [setValue]);

  return (
    <div className='AdminSIgnupImg_Main'>
      <div className='AdminSIgnupImg_Header'>
        <div className='AdminSIgnupImg_Header_Img_div'>
          <img src="./Logo.svg" alt='logo' />
        </div>
        <div className='AdminSignupimg_Goback_Arrow' onClick={() => navigate('/adminsignup2')}>
          <IoIosArrowRoundBack style={{ color: '#253D35', width: '40px', height: '40px' }} />
          <p>Go Back</p>
        </div>
      </div>
      <form className='AdminSIgnupImg_Body' onSubmit={handleSubmit(submit)} noValidate>
        <h2>Choose an Avatar</h2>
        <p>according to your gender </p>
        {uploadedFiles && uploadedFiles.length > 0 ? (
          <div>
            <img src={URL.createObjectURL(uploadedFiles[0])} alt="Avatar Preview" className='Avatar' />
          </div>
        ) : (
          <div className='AdminSIgnupImg_Avatar_Wrap'>
            <img src="./male.svg" alt="" className='Avatar' onClick={open} />
            <p>or</p>
            <img src="./female.svg" alt="" className='Avatar2' onClick={open} />
          </div>
        )}
        <div {...getRootProps({ style })} className="dropzone" >
          <input
            {...getInputProps()}
            {...register('avatar')}
          />
          <p onClick={open}>Drag 'n' drop an image, or Upload your image here</p>
        </div>
        <b className='adminLogin_error_msg'>{errors.avatar && errors.avatar?.message}</b>
        <div style={{ marginTop: '20px' }}>
          <button className='AdminSignupImg_Button'>Complete Sign Up</button>
        </div>
        <span className='AdminLogin_Terms_Condition' style={{ marginTop: '30px' }}>
          <p>Privacy</p>
          <p>x</p>
          <p>Terms an condition</p>
        </span>
      </form>
    </div>
  )
}

export default AdminSIgnupImg