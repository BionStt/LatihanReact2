import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import CreateUserComponent from './CreateUserComponent'
import ListUserComponent from './ListUserComponent'
import ViewUserComponent from './ViewUserComponent'


const Layout = () => {
  return (
    <>
    {/* <nav>
        <ul>
            { <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/latihan1">Latihan1</Link>
            </li>
            <li>
                <Link to="/latihan2">Latihan2</Link>
            </li> }
            <li>
                <Link to="/users">ListUserComponent</Link>
            </li>
            <li>
                <Link to="/add-user/:id">CreateUserComponent</Link>
            </li>
            <li>
                <Link to="/view-user/:id">ViewUserComponent</Link>
            </li>
        </ul>
    </nav>
    <Outlet/> */}

    <HeaderComponent />      
    <ListUserComponent/>
    <FooterComponent/>

    </>
   )
} 

export default Layout
