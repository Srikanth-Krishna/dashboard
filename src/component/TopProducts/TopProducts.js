import React from 'react';
import './TopProducts.css';
import TopProductsItem from './TopProductsItem';
import { topProductsData } from '../../data/data';
import { Card } from 'antd';

export default function TopProducts() {
  return (
    <Card className='top-products__container'>
      <h3>Top Products</h3>

      <div className='top-products__body'>
        <ul>
          {topProductsData.map((product, index) => {
            return (
              <li key={index}>
                <TopProductsItem {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
