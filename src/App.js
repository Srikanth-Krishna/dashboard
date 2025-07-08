import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './Pages/Root';
import HomePage from './Pages/Homepage/HomePage';
import AddProductsPage from './Pages/ProductsPage/AddProductsPage';
import ListProductsPage from './Pages/ProductsPage/ListProductsPage';
import DetailsProductsPage from './Pages/ProductsPage/DetailsProductsPage';
import ListOrdersPage from './Pages/OrdersPage/ListOrdersPage';
import DetailsOrderPage from './Pages/OrdersPage/DetailsOrderPage';
import AddNewUserPage from './Pages/UsersPage/AddNewUserPage';
import AllUsersPage from './Pages/UsersPage/AllUsersPage';
import LoginUser from './Pages/UsersPage/LoginUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/products',
        children: [
          { path: '/products/add', element: <AddProductsPage /> },
          { path: '/products/list', element: <ListProductsPage /> },
          { path: '/products/details', element: <DetailsProductsPage /> },
        ],
      },
      {
        path: '/orders',
        children: [
          { path: '/orders/list', element: <ListOrdersPage /> },
          { path: '/orders/details', element: <DetailsOrderPage /> },
        ],
      },
      {
        path: '/users',
        children: [
          { path: '/users/add-user', element: <AddNewUserPage /> },
          { path: '/users/all-users', element: <AllUsersPage /> },
        ],
      },
    ],
  },
  { path: '/users/login', element: <LoginUser /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
