import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  // Check if product is defined
  if (!product) {
    return <div>Loading...</div>; // or handle loading state appropriately
  }

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {/* Additional check for product.image */}
          {product.image && (
            <>
              <img src={product.image} alt='/' />
              <img src={product.image} alt='/' />
              <img src={product.image} alt='/' />
              <img src={product.image} alt='/' />
            </>
          )}
        </div>
        <div className='productdisplay-img'>
          {/* Additional check for product.image */}
          {product.image && (
            <img className='productdisplay-main-img' src={product.image} alt='Main Product' />
          )}
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(20K)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          {product.description || 'No description available.'}
        </div>
        {/* Additional check for product.id */}
        {product.id && (
          <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        )}
        {/* Additional check for product.id */}
        {product.id && (
          <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        )}
        <p className='productdisplay-right-category'><span>Category :</span>{product.category || 'N/A'}</p>
        <p className='productdisplay-right-category'><span>Tags :</span>{product.tags || 'N/A'}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
