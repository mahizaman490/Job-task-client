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

import Todo from './components/Todo';
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
        path:'addtask',
        element:<CreateNewTask></CreateNewTask> ,
        
      }, 
      {
        path:'alltask',
        element:<AllTask></AllTask>,
        loader: () => fetch("https://job-task-server-lemon.vercel.app/task")
       
      },
      {
        path:'updatetask/:id',
        element:<UpdateTask></UpdateTask>,
        loader: ({params}) => fetch(`https://job-task-server-lemon.vercel.app/task/${params.id}`)
       
      },
     
      {
        path:'myProfile',
        element:<Myprofile></Myprofile>,
       
      },
      {
        path:'todo',
        element:<Todo></Todo>,
       
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
