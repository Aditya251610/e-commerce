import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("Shop");
    const {getTotalItem} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>SHOPPER</p>
        </div>
        
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() =>{setMenu("Shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link>{menu==="Shop"?<hr />:null}</li>
            <li onClick={() =>{setMenu("Men")}}><Link style={{textDecoration: "none"}} to='/men'>Men</Link>{menu==="Men"?<hr />:null}</li>
            <li onClick={() =>{setMenu("Women")}}><Link style={{textDecoration: "none"}} to='/women'>Women</Link>{menu==="Women"?<hr />:null}</li>
            <li onClick={() =>{setMenu("Kids")}}><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link>{menu==="Kids"?<hr />:null}</li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            
            <Link to='/cart'><img src={cart_icon} alt='car-icon' /></Link>
            <div className='nav-cart-count'>{getTotalItem()}</div>
        </div>
        <img onClick={dropdown_toggle} className='nav-dropdown' src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt='dropdown-img' />
    </div>
  )
}

export default Navbar;
