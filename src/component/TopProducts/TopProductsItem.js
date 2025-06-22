import React from 'react';
import './TopProductsItem.css';

export default function TopProductsItem({
  image,
  title,
  qty,
  countryFlag,
  price,
  percentage,
}) {
  return (
    <div className='top-products__item'>
      <img src={image} alt={title} className='product-img' />
      <div className='top-products__item-body'>
        <div>
          <p className='item-title'>{title}</p>
          <p className='item-qty'>{qty}</p>
        </div>
        <div>
          <p className='coupon'>Coupon Code</p>
          <p className='coupon-code'>Sflat</p>
        </div>
        <div>
          <img src={countryFlag} alt='country-flag' className='country-flag' />
        </div>
        <div>
          <p className='item-percentage'> {percentage}</p>
          <p className='item-cost'>{price}</p>
        </div>
      </div>
    </div>
  );
}
