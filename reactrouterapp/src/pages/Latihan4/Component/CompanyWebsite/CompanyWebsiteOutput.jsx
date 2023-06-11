import React from 'react'
import { useRoutes } from "react-router-dom";
import {
    Home,
    About,
    Events,
    Products,
    Contact,
    Whoops404,
    Services,
    History,
    Location
  } from "./pages";


export default function CompanyWebsiteOutput() {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "services",
              element: <Services />
            },
            { path: "history", element: <History /> },
            {
              path: "location",
              element: <Location />
            }
          ]
        },
        { path: "events", element: <Events /> },
        { path: "products", element: <Products /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Whoops404 /> },
        {
          path: "services",
          redirectTo: "about/services"
        }
      ]);
      
    return (
      <div>
      <p>kok gak bs di rapikan</p>
      {element}
      </div>
      
      )
}
