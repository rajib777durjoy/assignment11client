import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Error from '../Layout/Error';
import Home from '../Pages/Home/Home'
import Allbook from '../Pages/Allbook/Allbook';
import Addbook from '../Pages/Addbook/Addbook';
import Borrowed from '../Pages/Borrowed/Borrowed';

const router= createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
         index:true,
         element:<Home></Home>
        },
        {
          path:'/allbook',
          element:<Allbook></Allbook>
        },
        {
            path:'/addbook',
            element:<Addbook></Addbook>
        },
        {
            path:'/borrowed',
            element:<Borrowed></Borrowed>
        },
      ]
    },
  ]); 

export default router;