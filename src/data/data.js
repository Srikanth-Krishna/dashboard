import {
  FaClipboardList,
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';

import product1 from '../component/TopProducts/images/product1.png';
import product2 from '../component/TopProducts/images/product2.png';
import product3 from '../component/TopProducts/images/product3.png';
import product4 from '../component/TopProducts/images/product4.png';
import product5 from '../component/TopProducts/images/product5.png';
import countryflag from '../component/TopProducts/images/countryflag.png';
import countryflag2 from '../component/TopProducts/images/countryflag2.png';
import countryflag3 from '../component/TopProducts/images/countryflag3.png';
import countryflag4 from '../component/TopProducts/images/countryflag4.png';
import countryflag5 from '../component/TopProducts/images/countryflag5.png';

export const metrics = [
  {
    title: 'Total Sales',
    value: '34,945',
    percentage: '1.56',
    trend: 'up',
    icon: FaShoppingCart,
    color: '#10B981',
    id: 'totalSales',
    sparklineData: [20, 30, 7, 100, 50, 80, 100],
  },
  {
    title: 'Total Income',
    value: '$37,802',
    percentage: '1.56',
    trend: 'down',
    icon: FaDollarSign,
    color: '#F97316',
    id: 'totalIncome',
    sparklineData: [30, 20, 10, 40, 60, 50, 70],
  },
  {
    title: 'Orders Paid',
    value: '34,945',
    percentage: '0.00',
    trend: 'up',
    icon: FaClipboardList,
    color: '#9CA3AF',
    id: 'ordersPaid',
    sparklineData: [60, 55, 50, 65, 70, 68, 72],
  },
  {
    title: 'Total Visitor',
    value: '34,945',
    percentage: '1.56',
    trend: 'up',
    icon: FaUsers,
    color: '#3B82F6',
    id: 'totalVisitors',
    sparklineData: [10, 20, 15, 25, 30, 28, 35],
  },
];

export const topProductsData = [
  {
    image: product1,
    title: 'Patimax Fragrance Long...',
    qty: `${100} items`,
    countryFlag: countryflag,
    price: '$24.00',
    percentage: '-10%',
  },
  {
    image: product2,
    title: 'Nulo MedalSeries Adult c...',
    qty: `${100} items`,
    countryFlag: countryflag2,
    price: '$24.00',
    percentage: '-10%',
  },
  {
    image: product3,
    title: 'Pedigree Puppy Dry Dog...',
    qty: `${100} items`,
    countryFlag: countryflag3,
    price: '$24.00',
    percentage: '-10%',
  },
  {
    image: product4,
    title: 'Biscoito Premier Cookie...',
    qty: `${100} items`,
    countryFlag: countryflag4,
    price: '$24.00',
    percentage: '-10%',
  },
  {
    image: product5,
    title: 'Pedigree Adult Dry Dog...',
    qty: `${100} items`,
    countryFlag: countryflag5,
    price: '$24.00',
    percentage: '-10%',
  },
];

export const topCountries = [
  {
    image: countryflag,
    country: 'Spain',
    trend: 'up',
    totalSales: '6,943',
  },
  {
    image: countryflag2,
    country: 'India',
    trend: 'down',
    totalSales: '6,943',
  },
  {
    image: countryflag3,
    country: 'England',
    trend: 'up',
    totalSales: '6,943',
  },
  {
    image: countryflag4,
    country: 'Brazil',
    trend: 'down',
    totalSales: '6,943',
  },
  {
    image: countryflag5,
    country: 'Germany',
    trend: 'up',
    totalSales: '6,943',
  },
  {
    image: countryflag,
    country: 'Spain',
    trend: 'up',
    totalSales: '6,943',
  },
];
