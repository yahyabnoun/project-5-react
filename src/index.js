import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jobs from './pages/Jobs'
import About from './pages/About'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },  
  {
    path: "pages/home",
    element: <Home/>,
  },  
  {
    path: "pages/jobs",
    element: <Jobs/>,
  },
  {
    path: "pages/About",
    element: <About/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

