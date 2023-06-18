import React from 'react'
import  './AppForCRUDUsers.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import ListUserComponent from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/ListUserComponent'
import HeaderComponent  from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/HeaderComponent'
import FooterComponent from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/FooterComponent'
import CreateUserComponent from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/CreateUserComponent'
import ViewUserComponent from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/ViewUserComponent'
import Layout from './pages/Latihan4/Component/CRUDUsersUsingClassComponent/Layout'


export default function AppForCRUDUsers() {
  return (
    // <div>
    //     <BrowserRouter>
    //     <Routes>
    //     <Route path="/" element={<Layout/>}>
    //       {/* jgn lupa setting layout untuk UI nya  */}
    //         {/* <Route index element={<Home/>}/> */}
    //         {/* <Route path="blogs" element={<Blogs/>}/> */}
    //         {/* <Route path="contact" element={<Contact/>}/> */}
    //         {/* <Route path="latihan1" element={<Latihan1/>}/> */}
    //         {/* <Route path="latihan2" element={<ListUserComponent/>}/> */}
    //         <Route path="/users" element={<ListUserComponent/>}/>
    //         <Route path="/add-user/:id" element={<CreateUserComponent/>}/>
    //         <Route path="/view-user/:id" element={<ViewUserComponent/>}/>
    //         {/* <Route/> */}
    //         {/* <Route path="*" element={<NoPage/>}/> */}
    //     </Route>    
    //     </Routes>   
             
                
             
    //     </BrowserRouter>
    // </div>
    <div>
    {/* <Router>
         
    </Router> */}
 <BrowserRouter>
    <HeaderComponent />
            <div className="container">
                <Routes> 
                      <Route path = "/"  element = {<ListUserComponent/>}></Route>
                      <Route path = "/users" element = {<ListUserComponent/>}></Route>
                      <Route path = "/add-user/:id" element = {<CreateUserComponent/>}></Route>
                      <Route path = "/view-user/:id" element = {<ViewUserComponent/>}></Route>
                </Routes>
            </div>
          <FooterComponent />
    </BrowserRouter>
</div>
  )
}
