import { FaHome, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

import { CgFileAdd } from 'react-icons/cg';
export const sidebarData = [
  {
    key: '/',
    icon: <FaHome />,
    label: 'Homepage',
  },
  {
    key: 'products',
    label: 'Products',
    icon: <FaCartShopping />,
    children: [
      {
        key: '/products/add',
        label: 'Add Product',
      },
      {
        key: '/products/list',
        label: 'Product List',
      },
      {
        key: '/products/details',
        label: 'Product Details',
      },
    ],
  },
  {
    key: '/orders',
    label: 'Orders',
    icon: <CgFileAdd />,
    children: [
      {
        key: '/orders/list',
        label: 'Orders List',
      },
      {
        key: '/orders/details',
        label: 'Order Details',
      },
    ],
  },
  {
    key: '/users',
    label: 'Users',
    icon: <FaUser />,
    children: [
      { key: '/users/add-user', label: 'Add New User' },
      { key: '/users/all-users', label: 'All Users' },
      { key: '/users/login', label: 'Login' },
    ],
  },
];
