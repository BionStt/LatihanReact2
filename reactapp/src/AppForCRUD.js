import logo from './logo.svg';
import './Components/CRUD/App.css';

import { Home } from './Components/CRUD/Home';
import { Department } from './Components/CRUD/Department';
import { Employee } from './Components/CRUD/Employee';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import { BrowserRouter as Router,Routes,Route, Link }  from 'react-router-dom';

function AppForCRUD() {
  return (
    <Router>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          Latihan FullStack React with Net Core 6
          My React App
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <Link className="btn btn-light btn-outline-primary" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item m-1">
              <Link className="btn btn-light btn-outline-primary" to="/department">
                Department
              </Link>
            </li>
            <li className="nav-item m-1">
              <Link className="btn btn-light btn-outline-primary" to="/employee">
                Employee
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/department' element={<Department/>}></Route>
          <Route path='/employee' element={<Employee/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}
export default AppForCRUD;