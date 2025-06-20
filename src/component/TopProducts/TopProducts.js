import React from 'react';
import './TopProducts.css';
import TopProductsItem from './TopProductsItem';

export default function TopProducts() {
  return (
    <div className='top-products__container'>
      <div className='top-products__header'>
        <h3>Top Products</h3>
      </div>
      <div className='top-products__body'>
        <ul>
          <li>
            <TopProductsItem />
          </li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
}
