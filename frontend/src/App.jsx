import { memo } from 'react';
import Home from './pages/Home.jsx';
import CreateBook from './pages/CreateBook.jsx';
import Addbook from './pages/Addbook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import Applayout from './components/layout/Applayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        { path: '/DeleteBook', 
          element: <DeleteBook />
         },
      ],
    },
    
  ]);
   return (
    <>
      <RouterProvider router={router} />
      <ToastContainer /> 
    </>
   )
  // return <RouterProvider router={router} />;
};

export default memo(App);
