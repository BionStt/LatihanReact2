import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route, Link }  from 'react-router-dom';
/** Layouts **/
import LoginLayoutRoute from "./Components/MultiLayoutReactRouter/LoginLayout";
import DashboardLayoutRoute from "./Components/MultiLayoutReactRouter/DashboardLayout";

/** Components **/
import UserPage from './Components/MultiLayoutReactRouter/UserPage';
import LoginPage from './Components/MultiLayoutReactRouter/LoginPage'

/* 
   App 
 */
class AppForMultiLayoutReactRouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    {/*<Route exact path="/">*/}
                    {/*    <Link to="/layout1" />*/}
                    {/*</Route>*/}
                    <LoginLayoutRoute path="/layout1" element={<LoginPage/>} />
                    <DashboardLayoutRoute path="/layout2" element={<UserPage/>} />
                </Routes>
            </Router>
        );
    }
}

export default AppForMultiLayoutReactRouter;   