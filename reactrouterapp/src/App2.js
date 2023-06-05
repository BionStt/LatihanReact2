import ReactDom from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Latihan1 from './pages/Latihan1/Latihan1'
import Latihan2 from './pages/Latihan2/Latihan2'
import Latihan3 from './pages/Latihan3/Latihan3'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

export default function App2()  {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          {/* jgn lupa setting layout untuk UI nya  */}
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="latihan1" element={<Latihan1/>}/>
            <Route path="latihan2" element={<Latihan2/>}/>
            <Route path="latihan3" element={<Latihan3/>}/>
            {/* <Route/> */}
            <Route path="*" element={<NoPage/>}/>
        </Route>    
        </Routes>    
    </BrowserRouter>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App2/>);

