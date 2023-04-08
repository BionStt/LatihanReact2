import React, { Component } from 'react';

import Addition from './Components/Addition';
import Addition2 from './Components/Addition2';
import Sum from './Components/Sum';
import Product from './Components/Product';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Product4 from './Components/Product4';
import Product5 from './Components/Product5';
import Product6 from './Components/Product6';
import States from './Components/StateDemo';
import States2 from './Components/StateDemo2';
import Employee from './Components/Employee';
import EventBinding from './Components/EventBinding';
import MasterComponent from './Components/MasterComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import EmployeeList from './Components/EmployeelistWithArrayIndex';
import EmployeeList2 from './Components/EmployeeListWithArrayMap';
import EmployeeList3 from './Components/EmployeeListArrayKeyValuePair';
import EmployeeListParentComponent from './Components/EmployeeListParentComponent';
import EmployeeListWithKey from './Components/EmployeeListWithKey';
import UserForm from './Components/ContohForm';
import UserForm2 from './Components/UserFormComponent';
import UserFormWithSelect from './Components/UserFormWithSelect';
import UserFormWithMultipleSelect from './Components/UserFormWithMultipleSelect';
import UserFormWithMultipleSelectAndArray from './Components/UserFormWithMultipleSelectAndArray';
import Fragments from './Components/Fragment';
import Fragments2 from './Components/Fragment2';
import Fragments3 from './Components/Fragment3';
import Calculation from './Components/Calculation';
import CalculationWithPureComponent from './Components/CalculationWithPureComponent';
import Tooltip from './Components/Tooltip';
import TooltipWithErrorBoundary from './Components/TooltipWithErrorBoundary';
import ErrorBoundary from './Components/ErrorBoundary';   
import Movement from './Components/Movement';
import MovementMonkey from './Components/MovementMonkey';
import Monkey from './Components/Monkey';
import MasterComponentForContext from './Components/MasterComponentForContext';
// import {UserProvider} from './Components/UserContext';
import { UserProvider,ThemeProvider } from './Components/UserContext';  
import DisplayList from './Components/DisplayList';
import DisplayListWithAxios from './Components/DisplayListWithAxios';
import UserFormPostWithAxios from './Components/UserFormPostWithAxios';
import MathClass from './Components/MathClass';
import MathFunction from './Components/MathFunction';
import ParentComponentForMemo from './Components/ParentComponentForMemo';
import CompanyListUsingTableRow from './Components/CompanyListUsingTableRow';
import EmployeeListUsingTableRow from './Components/EmployeeListUsingTableRow';
import Toastr from './Components/Toastr' ; 
import CustomToastr from './Components/CustomToastr' ; 
import AnimationToastr from './Components/AnimationToastr' ; 
import Sweetalertdemo from './Components/Sweetalertdemo' ; 
import Toggle from './Components/Toggle' ; 
import ChildForToggle from './Components/ChildForToggle' ; 
// import Hideshow from './Components/Hideshow' ; 
import Tabs from "./Components/Tabs";
import Datepic from './Components/Datepic'  
import Datefce from "./Components/Datefce";  
import Timepicker from "./Components/Timepicker";  
import ClockDemo from './Components/ClockDemo'; 
import ClockLiveDemo from './Components/ClockLiveDemo'; 
import Mobilenumbervalidation from './Components/Mobilenumbervalidation'; 

import { BrowserRouter as Router,Routes,Route, Link }  from 'react-router-dom';


// ract-bootstrap components
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import LoginRegisterWithAxios from "./Components/LoginRegisterWithAxios";  
import RegisterEmployeeWithAxios from "./Components/RegisterEmployeeWithAxios"; 
import DahboardLoginRegisterEmployeeAxios from "./Components/DahboardLoginRegisterEmployeeAxios";  

import './App.css'; 

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                   
                </tbody>
            </table>
           
        );
    }

    render() {
        const personalinfo = {
            name: "xyz",
            address: "150 seattle",
            zipcode: "11111",
            city:"wc",
            contactnumber:"9989898"
        }
        const proffessionalinfo ={
            occupation: "business",
            designation: "CE0",
            salary:"50k"
        }

        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderForecastsTable(this.state.forecasts);

        return (
          <ErrorBoundary>    
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
               <br/>
               <br/>
               <h1>Tabs Demo</h1>
                <Tabs>
                    <div label="Gator">
                    After 'while, <em>ada deh </em>!
                    <br/>
                    <Addition></Addition>
                    <br/>
                        <Addition2></Addition2>
                        <br/>
                        <Sum></Sum>
                        <br/>
                        <Product></Product>
                        <br/>
                        <Product2></Product2>
                        <br/>
                        <Product3></Product3>
                        <br/>
                        <Product4></Product4>
                        <br/>
                        <Product5></Product5>
                        <br/>
                        <Product6 name="multiply"></Product6>
                        <br/>
                        <Product6 name="tambah"></Product6>
                        <br/>
                        <Product6 name="kurang"></Product6>
                        <p>klik diangka ini maka akan berubah atau bertambah nilainya</p>
                        <br/>
                        <States/>
                    
                        <p>klik counter dong</p>
                        <States2/>
                        <br/>

                    
                    </div>
                    <div label="Croc">
                    After 'while, <em>Crocodile</em>!

                    <Employee personalinfo={personalinfo} proffessionalinfo={proffessionalinfo}></Employee>
                    <br/>
                    <EventBinding></EventBinding>
                    <br/>
                    <MasterComponent></MasterComponent>
                    <br/>
                    <ConditionalRendering></ConditionalRendering>
                    <br/>
                    <EmployeeList></EmployeeList>
                    <br/>
                    <EmployeeList2></EmployeeList2>
                    <br/>
                    <EmployeeList3></EmployeeList3>
                    <br/>
                    <EmployeeListParentComponent></EmployeeListParentComponent>
                    <br/>
                    <EmployeeListWithKey></EmployeeListWithKey>
                    <br/>
                    <UserForm></UserForm>
                    <br/>
                    <UserForm2></UserForm2>
                    <br/>
                    <UserFormWithSelect></UserFormWithSelect>
                    <br/>
                    <UserFormWithMultipleSelect></UserFormWithMultipleSelect>
                    <br/>
                    <UserFormWithMultipleSelectAndArray></UserFormWithMultipleSelectAndArray>
                    <br/>
                    <Fragments></Fragments>
                    <br/>
                    <Fragments2></Fragments2>
                    <br/>
                    <Fragments3></Fragments3>
                    <br/>
                    <Calculation></Calculation>
                    <br/>
                    <CalculationWithPureComponent></CalculationWithPureComponent>
                    <br/>
                    <Tooltip></Tooltip>
                    <br/>
                    {/* cek didlm komponen bawa ini utk liat munculkan error  */}
                    <TooltipWithErrorBoundary></TooltipWithErrorBoundary> 
                    <br/>

                    </div>
                    <div label="Sarcosuchus">
                    Nothing to see here, this tab is <em>extinct</em>!
                      <Movement></Movement>
                        <br/>
                        <MovementMonkey render={({x,y}) =>  (  
                                <Monkey Movement={{x,y}}/>  
                            )}/>  
                        <br/>
                        <MasterComponentForContext></MasterComponentForContext>
                        <br/>
                        <UserProvider value="New Sutanto">  
                            <ThemeProvider value="red">  
                            <MasterComponentForContext />  
                            </ThemeProvider>  
                        </UserProvider>  
                        <br/>
                        <DisplayList></DisplayList>
                        <br/>
                        <DisplayListWithAxios></DisplayListWithAxios>
                        <br/>
                        <UserFormPostWithAxios></UserFormPostWithAxios>
                        <br/>
                        <MathClass></MathClass>
                        <br/>
                        <MathFunction></MathFunction>
                        <br/>
                        <ParentComponentForMemo></ParentComponentForMemo>
                        <br/>
                        <h1>Company List</h1>    
                        <CompanyListUsingTableRow></CompanyListUsingTableRow>    
                            <h1> Employee List</h1>    
                            <EmployeeListUsingTableRow></EmployeeListUsingTableRow>       
                        <br/>

                    </div>
                    <div label="terkaitToasterDanlain lain">
                       <Toastr></Toastr>
                            <br/>
                            <CustomToastr></CustomToastr>
                            <br/>
                            <AnimationToastr></AnimationToastr>
                            <br/>
                            <Sweetalertdemo></Sweetalertdemo>
                            <br/>
                        <Toggle title="Show Child">
                            <ChildForToggle/>
                        </Toggle>
                            <br/>
                            Ada error pada hideshow nanti diberesin ya
                            {/* <Hideshow/> */}
                            <br/>
                            <h1>Tabs Demo</h1>
                            <Tabs>
                                <div label="Gator">
                                See ya later, <em>Alligator</em>!
                                </div>
                                <div label="Croc">
                                After 'while, <em>Crocodile</em>!
                                </div>
                                <div label="Sarcosuchus">
                                Nothing to see here, this tab is <em>extinct</em>!
                                </div>
                            </Tabs>
                            <br/>
                            <Datepic></Datepic>  
                            <br/>
                            <Datefce></Datefce> 
                            <br/> 
                            <Timepicker></Timepicker>  
                            <br/>
                            <ClockDemo/>  
                            <br/>
                            <ClockLiveDemo/>  
                            <br/>
                            <Mobilenumbervalidation></Mobilenumbervalidation>
                            <br/>
                            <br/>



                     </div>  

                     <div label="Tab didalm tab nih">
                        <h1>Tabs Demo</h1>
                                <Tabs>
                                    <div label="Gator">
                                    See ya later, <em>Alligator</em>!
                                    </div>
                                    <div label="Croc">
                                    After 'while, <em>Crocodile</em>!
                                    </div>
                                    <div label="Sarcosuchus">
                                    Nothing to see here, this tab is <em>extinct</em>!
                                    </div>
                                </Tabs>
                                <br/>
                     </div>
                     
                     <div label="Belajar axios ditab ini">

                     <br/>
                            <Router>
                            {/* <Link to="/DahboardLoginRegisterEmployeeAxios" >DahboardLoginRegisterEmployeeAxios</Link> | */}
                            <Link to="/RegisterEmployeeWithAxios" > RegisterEmployeeWithAxios</Link>  |
                            <Link to="/LoginRegisterWithAxios" > LoginRegisterWithAxios</Link>

                            <Routes>
                            <Route path="/DahboardLoginRegisterEmployeeAxios" element={<DahboardLoginRegisterEmployeeAxios/>} />
                            <Route path="/RegisterEmployeeWithAxios" element={<RegisterEmployeeWithAxios />} />
                            <Route path="/LoginRegisterWithAxios" element={<LoginRegisterWithAxios />} />
                            
                            </Routes>
                            </Router>
                            <br/>
                            <br/>
                            <br/>
                            <Router>
                                <div className="container">      
                                    <nav className="">      
                                        <div className="" >      
                                        <ul className="">      
                                        <li className="">      
                                            <Link to={'/LoginRegisterWithAxios'} className="">LoginRegisterWithAxios</Link>      
                                        </li>    
                                        <li className="">      
                                            <Link to={'/RegisterEmployeeWithAxios'} className="">RegisterEmployeeWithAxios</Link>      
                                        </li>    
                                        </ul>      
                                        </div>      
                                    </nav>
                                        <br />      
                                
                                </div>         
                                <Routes>
                                <Route path="/DahboardLoginRegisterEmployeeAxios" element={<DahboardLoginRegisterEmployeeAxios/>} />
                                <Route path="/RegisterEmployeeWithAxios" element={<RegisterEmployeeWithAxios />} />
                                <Route path="/LoginRegisterWithAxios" element={<LoginRegisterWithAxios />} />
                                
                                </Routes>
                                </Router>
                                <br />    
                                <br />    





                     </div>
                    
                   
                </Tabs>
                <br/>

              
                
               
              
              
              
                    <br />    






              </div>
                    



             {contents}
       
         </ErrorBoundary>    
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
