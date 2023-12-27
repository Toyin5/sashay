import './App.css'
import AdminLogin from './component/adminOnboarding/AdminLogin'
import AdminSignup from './component/adminOnboarding/AdminSignup'
import Body from './component/body/Body'
import { HashRouter, Route,Routes } from 'react-router-dom'
import UserLogin from './component/userOnboarding/UserLogin'
import UserSignup from './component/userOnboarding/UserSignup'
import AdminSignup2 from './component/adminOnboarding/AdminSignup2'
import AdminSIgnupImg from './component/adminOnboarding/AdminSIgnupImg'
import AdminForgotPassword from './component/adminOnboarding/AdminForgotPassword'
import AdminResetPassword from './component/adminOnboarding/AdminResetPassword'
import UserResetPassword from './component/userOnboarding/UserResetPassword'
import UserForgotPassword from './component/userOnboarding/UserForgotPassword'
import UserSignupImg from './component/userOnboarding/UserSignupImg'
import UserSignup2 from './component/userOnboarding/UserSignup2'


const App: React.FC = () => {

  return (
    <div className='App_Main'>
       <HashRouter>
         <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/adminlogin' element={<AdminLogin/>}/>
            <Route path='adminsignup' element={<AdminSignup/>}/>
            <Route path='adminsignup2' element={<AdminSignup2/>}/>
            <Route path='adminsignup3' element={<AdminSIgnupImg/>}/>
            <Route path='adminforgotpassword' element={<AdminForgotPassword/>}/>
            <Route path='adminresetpassword/:id' element={<AdminResetPassword/>}/>
            <Route path='userlogin' element={<UserLogin/>}/>
            <Route path='usersignup' element={<UserSignup/>}/>
            <Route path='usersignup2' element={<UserSignup2/>}/>
            <Route path='usersignup3' element={<UserSignupImg/>}/>
            <Route path='user_resetPassword' element={<UserResetPassword/>}/>
            <Route path='user_forgotpassword' element={<UserForgotPassword/>}/>
         </Routes>
       </HashRouter>
    </div>
  )
}

export default App
