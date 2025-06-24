import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './Pages/Root';
import HomePage from './Pages/Homepage/HomePage';
import AddProductsPage from './Pages/ProductsPage/AddProductsPage';
import ListProductsPage from './Pages/ProductsPage/ListProductsPage';

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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
