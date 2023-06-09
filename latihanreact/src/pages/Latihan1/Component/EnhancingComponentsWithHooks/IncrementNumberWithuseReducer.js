import React, { useReducer } from 'react'

export default function IncrementNumberWithuseReducer() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
      );
    
      return <h1 onClick={() => setNumber(1)}>{number}</h1>
}
