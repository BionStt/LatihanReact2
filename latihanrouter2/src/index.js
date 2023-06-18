import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root,{ loader as rootLoader,
    action as rootAction, } from './Component/routes/root'
import ErrorPage  from './Component/error-page'
import Contact,{loader as contactLoader,} from './Component/contact.jsx'
import EditContact, {
  action as editAction,
}  from './Component/routes/edit'

import  { action as destroyAction } from './Component/routes/destroy'


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action: rootAction,
    children:[
      {
        path:"contacts/:contactId",
        element:<Contact/>,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  {
    path:"contacts/:contactId",
    element:<Contact/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
