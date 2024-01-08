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
import Register from './Compnents/Register/Register.jsx';
import Auth_Context from './Context/Auth_Context.jsx';
import Private_Route from './Private_Route/Private_Route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Private_Route><App></App></Private_Route>
      },
      {
        path: 'coffee',
        element: <Private_Route><Add_Coffee></Add_Coffee></Private_Route>
      },
      {
        path: 'coffee/:id',
        element: <Private_Route><Coffee_Details></Coffee_Details></Private_Route>,
        loader: ({ params }) => fetch(`https://coffee-store-server-seven-theta.vercel.app/coffee/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <Private_Route><Update_Coffee></Update_Coffee></Private_Route>,
        loader: ({ params }) => fetch(`https://coffee-store-server-seven-theta.vercel.app/coffee/${params.id}`)
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
        path: 'register',
        element: <Register></Register>
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
    <Auth_Context>
      <RouterProvider router={router} />
    </Auth_Context>
  </React.StrictMode>,
)
