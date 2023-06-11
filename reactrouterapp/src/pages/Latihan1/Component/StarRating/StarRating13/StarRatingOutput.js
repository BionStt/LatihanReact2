import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
// `useColors` hook 
export default function StarRatingOutput() {
  return (
    <>
    <AddColorForm />
    <ColorList />
  </>
  )
}
