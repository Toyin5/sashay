import './App.css'
import AdminLogin from './component/adminOnboarding/AdminLogin'
import AdminSignup from './component/adminOnboarding/AdminSignup'
import Body from './component/body/Body'
import { HashRouter, Route,Routes } from 'react-router-dom'
import UserLogin from './component/userOnboarding/UserLogin'
import UserSignup from './component/userOnboarding/UserSignup'
import AdminSignup2 from './component/adminOnboarding/AdminSignup2'
import AdminSIgnupImg from './component/adminOnboarding/AdminSIgnupImg'
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
            <Route path='userlogin' element={<UserLogin/>}/>
            <Route path='usersignup' element={<UserSignup/>}/>
         </Routes>
       </HashRouter>
    </div>
  )
}

export default App
