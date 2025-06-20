import {
  FaClipboardList,
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';

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
