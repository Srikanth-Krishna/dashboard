import React from 'react';
import './TopProductsItem.css';
import countryFlag from './images/countryflag.png';
import product1 from './images/product1.png';

export default function TopProductsItem() {
  return (
    <div className='top-products__item'>
      <img src={product1} alt='product-img' className='product-img' />
      <div className='top-products__item-body'>
        <div>
          <p className='item-title'>Patimax Fragrance Long...</p>
          <p className='item-qty'>100 items</p>
        </div>
        <div>
          <p className='coupon'>Coupon Code</p>
          <p className='coupon-code'>Sflat</p>
        </div>
        <div>
          <img src={countryFlag} alt='country-flag' className='country-flag' />
        </div>
        <div>
          <p className='item-percentage'> -15%</p>
          <p className='item-cost'>$25.00</p>
        </div>
      </div>
    </div>
  );
}
