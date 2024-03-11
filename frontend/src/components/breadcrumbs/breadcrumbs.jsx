import React from 'react';
import './breadcrumb.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const BreadCrumbs = (props) => {
    const { product } = props;

    return (
        <div className='breadcrumb'>
            HOME <img src={arrow_icon} alt='arrow-icon' /> SHOP <img src={arrow_icon} alt='arrow-icon' /> {product?.category} <img src={arrow_icon} alt='arrow-icon' /> {product?.name}
        </div>
    );
};

export default BreadCrumbs;
