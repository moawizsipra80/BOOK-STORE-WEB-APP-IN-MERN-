import { memo } from 'react';
import Home from './pages/Home.jsx';
import CreateBook from './pages/SearchBook.jsx';
import Addbook from './pages/Addbook.jsx';
import Buynow from "./pages/Buynow.jsx";
import Applayout from './components/layout/Applayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { ToastContainer } from "react-toastify";
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        { path: '/',
           element: <Home /> 
          },
        { path: '/CreateBook',
         element: <CreateBook />
         },
        { path: '/Addbook'
          
          , element: <Addbook /> 
        
        },
        { path: '/Buynow/:id', 
          element:<Buynow/>

         },
      ],
    },
  ]);
 return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );

};

export default memo(App);
