import logo from './logo.svg';
import './Components/CRUD/App.css';

import { Home } from './Components/CRUD/Home';
import { Department } from './Components/CRUD/Department';
import { Employee } from './Components/CRUD/Employee';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function AppForCRUD() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          My React App
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/department">
                Department
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                Employee
              </NavLink>
            </li>
          </ul>
        </nav>

        <switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/department' component={Department}></Route>
          <Route path='/employee' component={Employee}></Route>
        </switch>
      </div>
    </BrowserRouter>
  );
}
export default AppForCRUD;