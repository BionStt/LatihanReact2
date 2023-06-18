import React, { useState } from 'react'

export default function CheckBoxUseStateWithToggle() {
    const [checked, setChecked] = useState(false);

    function toggle() {
      setChecked(checked => !checked);
    }
  
 
    return (
        <>
        <input type="checkbox" 
        value={checked} 
        onChange={toggle}
        // onChange={() => setChecked(checked => !checked)} //bisa jg lgs seperti ini
         />
        {checked ? "checked" : "not checked"}
      </>
  )
}
