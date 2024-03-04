import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='footer-logo' />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt="instagram_icon" />
            </div>
            <div className='footer-icons-container'>
                <img src={pintester_icon} alt="pintester_icon" />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='whatsapp_icon' />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;