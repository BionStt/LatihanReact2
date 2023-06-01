import React from 'react'
import Car from './Car'

export default function Garage() {
    const carName = "Ford";
  return (
    <>
    <h1>Who lives in my garage?</h1>
    <Car brand={ carName } />
  </>
  )
}
