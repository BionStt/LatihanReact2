import React from 'react'
import { BrowserRouter  } from "react-router-dom";
import ReactDom from "react-dom";
import CRUDEmployeeOutput from './pages/Latihan4/Component/CRUDEmployee/Component/CRUDEmployeeOutput'

export default function AppForCRUDEmployee() {
  return (
    <BrowserRouter>
    <CRUDEmployeeOutput/>
      </BrowserRouter>
  )
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppForCRUDEmployee/>);


