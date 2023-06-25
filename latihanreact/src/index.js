import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import AppforMateriRouter from './AppforMateriRouter'
import AppForMateriCRUD from './AppForMateriCRUD'
import AppForCompanyWebsite from './AppForCompanyWebsite'
import AppForCRUDMovie from './AppForCRUDMovie'
import 'bootstrap/dist/css/bootstrap.css';
import AppForReduxToolkit from './AppForReduxToolkit'

import AppForCRUDUsers from './AppForCRUDUsers'
import AppForCRUDHook from './AppForCRUDHook'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
     {/* <App2 />  */}
    {/* app2 latihan terkait react router */}

    {/* <AppForCompanyWebsite /> */}
      {/* latihan react router jg nih  */}

    {/* <AppforMateriRouter/> */}
    {/* AppforMateriRouter latihan dari edspert */}

    
    {/* <AppForMateriCRUD/> */}
    {/* AppForMateriCRUD latihan edspert */}

    {/* <AppForCRUDMovie/> */}

    {/* <AppForCRUDUsers/> */}

    {/* <AppForReduxToolkit/> */}

    <AppForCRUDHook/>


    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
