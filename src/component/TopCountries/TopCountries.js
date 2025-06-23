import { IoIosTrendingUp } from 'react-icons/io';
import './TopCountries.css';
import { topCountries } from '../../data/data';
import TopCountriesItem from './TopCountriesItem';

export default function TopCountries() {
  return (
    <div className='top-countries-container'>
      <h3>Top Countries By Sales</h3>
      <div className='country-analytics'>
        <h4>$37,802</h4>
        <div className='country-trending'>
          <i>
            <IoIosTrendingUp />
          </i>
          1.56%
        </div>
        <div>
          <p>since last weekend</p>
        </div>
      </div>
      <div className='country-list'>
        <ul>
          {topCountries.map((item, index) => {
            return (
              <li key={index}>
                <TopCountriesItem {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
