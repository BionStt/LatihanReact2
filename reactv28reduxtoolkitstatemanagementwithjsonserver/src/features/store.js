import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/carslice";

// export default function store() {
//   return <div>store</div>;
// }

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
