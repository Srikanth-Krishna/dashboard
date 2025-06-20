import { FaHome, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

import { CgFileAdd } from 'react-icons/cg';

export const sidebarData = [
  {
    key: '1',
    path: '/',
    icon: <FaHome />,
    label: 'Homepage',
  },
  {
    key: '2',
    label: 'Products',
    path: '/products',
    icon: <FaCartShopping />,
  },
  {
    key: '3',
    label: 'Orders',
    path: '/orders',
    icon: <CgFileAdd />,
  },
  {
    key: '4',
    label: 'Users',
    path: '/users',
    icon: <FaUser />,
  },
];
