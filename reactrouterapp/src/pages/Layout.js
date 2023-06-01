import React from 'react'
import {Outlet,Link} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
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
            </li>
            <li>
                <Link to="/latihan3">Latihan3</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
   )
} 

export default Layout
