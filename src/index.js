import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFounded from './pages/NotFounded';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProducts from './pages/NewProducts';
import Cart from './pages/Cart';
import ProtectedRoute from './pages/ProtectedRoute';


const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<NotFounded/>,
  children:[
    {index:true , element:<Home/>},
    {path:"all", element:<AllProducts/>},
    {path:'new', element://
    <ProtectedRoute requireAdmin>
      <NewProducts/>
    </ProtectedRoute>},
    {path:'cart', element:
    <ProtectedRoute>
      <Cart/>
    </ProtectedRoute> },
  ]
}]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
