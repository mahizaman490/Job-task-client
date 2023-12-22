import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AuthProvider from './providers/AuthProvider';
import App from './App';
import Home from './components/Home';
import Login from './Login';
import Register from './components/Register';
import Contact from './components/Contact';




import CreateNewTask from './components/CreateNewTask';
import Myprofile from './components/Myprofile';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from './components/Dashboard';
import AllTask from './components/AllTask';
import UpdateTask from './components/UpdateTask';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      {
        path:'alltask',
        element:<CreateNewTask></CreateNewTask> 
      },
      {
        path:'addtask',
        element:<AllTask></AllTask>,
       
      },
      {
        path:'updatetask',
        element:<UpdateTask></UpdateTask>,
       
      },
     
      {
        path:'myProfile',
        element:<Myprofile></Myprofile>,
       
      }
    ]
  
  
  
  
  
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
