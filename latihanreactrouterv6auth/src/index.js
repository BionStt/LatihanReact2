import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider , BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import { App,router } from "./AppForAuth";

const theme = createTheme({
  palette: {
    primary: { main: "#3a34d2" }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}


    <BrowserRouter>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </AuthProvider>
        </BrowserRouter>


{/* cara kedua dibawah ini */}
    {/* <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider> */}


   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
