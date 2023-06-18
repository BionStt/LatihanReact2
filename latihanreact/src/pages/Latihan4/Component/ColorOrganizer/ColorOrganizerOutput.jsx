import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import {ColorDetails} from './ColorDetails'
import {ColorProvider}from './hooks'
// import * from './hooks'
import './Colors.css'

export default function ColorOrganizerOutput() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        ></Route>
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  )
}
