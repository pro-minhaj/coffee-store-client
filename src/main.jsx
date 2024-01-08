import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Add_Coffee from './Compnents/Add_Coffee/Add_Coffee.jsx';
import Coffee_Details from './Compnents/Coffe_Details/Coffee_Details.jsx';
import Update_Coffee from './Compnents/Update_Coffe/Update_Coffee.jsx';
import Error from './Compnents/Error/Error.jsx';
import Blog from './Compnents/Blog/Blog.jsx';
import Login from './Compnents/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: 'coffee',
        element: <Add_Coffee></Add_Coffee>
      },
      {
        path: 'coffee/:id',
        element: <Coffee_Details></Coffee_Details>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: 'update',
        element: <Update_Coffee></Update_Coffee>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: "/*",
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
