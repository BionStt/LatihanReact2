import React from "react";
import ReactDom from "react-dom";
import CompanyWebsiteOutput from './pages/Latihan4/Component/CompanyWebsite/CompanyWebsiteOutput'
import { BrowserRouter as Router } from "react-router-dom";

export default function AppForCompanyWebsite(){
    return(
        <Router>
        <CompanyWebsiteOutput />
      </Router>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppForCompanyWebsite/>);