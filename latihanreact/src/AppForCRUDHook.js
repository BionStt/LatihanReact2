import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
// import './tailwind.css'
import MateriCRUDHook from './pages/LatihanRectCRUDHook/index'

export default function AppForCRUDHook() {
  return (
    <BrowserRouter>
    <MateriCRUDHook></MateriCRUDHook>
    </BrowserRouter>
   
  )
}
