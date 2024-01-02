import { Route, Routes } from 'react-router-dom'
import './AdminDashRight.css'
import AdminAddProduct from './adminAddProduct/AdminAddProduct'

function AdminDashRight() {
  return (
    <div className='AdminDashRight_Main'>
        <Routes>
            <Route path='/adminaddproduct' element={<AdminAddProduct/>} />
        </Routes>
    </div>
  )
}

export default AdminDashRight