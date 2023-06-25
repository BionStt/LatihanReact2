import React from 'react'
import { Route, Routes, Switch } from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState'

import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'




export default function index() {
  return (
    <GlobalProvider>
        <Routes>
        <Route path="/" element={<Home/>} exact />
          <Route path="/add" element={<AddEmployee/>} exact />
          <Route path="/edit/:id" element={<EditEmployee/>} exact />
        </Routes>
    </GlobalProvider>
   
  )
}
