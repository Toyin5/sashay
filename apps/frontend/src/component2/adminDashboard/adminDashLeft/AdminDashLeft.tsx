import { useNavigate } from 'react-router-dom'
import './AdminDashLeft.css'
function AdminDashLeft() {
  const navigate=useNavigate()
  return (
    <div className='AdminDashLeft_Main'>
        <div className='AdminDashLeftImage_Wrap'>
          <img src="./DashLogo.svg" alt="" className='AdminDashLogo'/>
        </div>
        <div className='AdminDashLeftNavigation_Wrap'>
          <p onClick={()=> navigate('/admindashboard/adminaddproduct')} >Add Product</p>
        </div>
    </div>
  )
}

export default AdminDashLeft