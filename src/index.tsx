import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import HomePage from './components/Home';
import About from './components/About';
import CardDatabase from './components/CardDatabase';
import Rules from './components/Rules';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cards',
        element: <CardDatabase />,
      },
      {
        path: '/rules',
        element: <Rules />,
      },
    ]
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
