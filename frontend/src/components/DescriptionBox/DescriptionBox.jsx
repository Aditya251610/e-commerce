import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='description-nav-box'>Description</div>
            <div className='description-nav-box fade'>Reviews(20K)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                An e-commerce website is an online platform that facilitates
                buying and selling of products or services over the internet
                serves as a virtual marketplace where businesses and individual
                showcase their products, interact with customers, and conduct
                transactions without the need for a physical presence. E-Commerce
                websites have gained immense popularity due to their convenient 
                accessibility, and the global reach they offer.
            </p>
            <p>
                E-Commerce websites typically display products or services and
                detailed descriptions, images, prices, and any available varities 
                (e.g., sizes, colours). Each product usually has its own dedication
                with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;