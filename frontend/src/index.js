import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './components/LoginCred/Login';
import Signup from './components/LoginCred/Signup';
import Profile from './components/ProfilePage/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppRouter = createBrowserRouter ([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/signup',
    element:<Signup/>,
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
