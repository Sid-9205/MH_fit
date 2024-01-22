import React from 'react';
import ReactDOM from 'react-dom/client';
import Component_index from './component/component_index';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router= createBrowserRouter([
  {
    path:'/',
    element:Component_index.About
  },
  {
    path:'/Facilities',
    element:Component_index.Facilities
  },
  {
    path:'/Services',
    element:Component_index.Service
  },
  {
    path:'/Membership',
    element:Component_index.Membership
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
