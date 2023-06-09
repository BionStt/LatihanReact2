import React, { useReducer } from 'react'

export default function CheckBoxWithuseReducer() {
    const [checked, toggle] = useReducer(checked => !checked, false);


  return (
     <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}
