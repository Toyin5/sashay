import './Header.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate()
    return (
        <div className='Header_Main'>
            <div className='Header_Main_Wrap'>
                <div className='Header_Main_Logo_Wrap'>
                    <img src="./Logo.svg" alt="" />
                    {/* <p>Brand Logo</p> */}
                </div>
                <div className='Header_Main_Nav_Wrap'>
                    <p>Shop</p>
                    <p>About Us</p>
                    <p>Category</p>
                    <p>Blog</p>
                    <p>Contacct Us</p>
                </div>
                <div className='Header_Main_Icon_Action_Wrap'>
                    <CiSearch style={{ width: "30px", height: "20px" }} />
                    <span className='Header_Shopping_Cart_Holder'>
                        <CiShoppingCart style={{ width: "30px", height: "20px", color:"white" }} />
                    </span>
                    <button className='Header_SignIn_Button'onClick={()=>navigate('/adminlogin')} >Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Header