import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io';
import './TopCountriesItem.css';

export default function TopCountriesItem({
  image,
  country,
  totalSales,
  trend,
}) {
  return (
    <div className='item-container'>
      <img src={image} alt={country} />
      <div className='item-body'>
        <a href='#'>{country}</a>
        <i className={trend === 'up' ? 'up' : 'down'}>
          {trend === 'up' ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
        </i>
        <div className='sales'>{totalSales}</div>
      </div>
    </div>
  );
}
