import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Products from './pages/Products.jsx';
import Category from './pages/Category.jsx';
import ItemPage from './pages/ItemPage.jsx';
import React from 'react';
import NewProduct from './pages/NewProduct.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/new-product',
        element: (
          <ProtectedRoute requiredAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/all-items',
        element: <Products />,
      },
      {
        path: '/all-items/:item',
        element: <ItemPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
