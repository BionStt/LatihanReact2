import React ,{ useState, useRef, useEffect } from 'react'



export default function SampleInput2() {
    const      [name, setName] = useState('Sutanto')
    const      input = useRef(     )

    useEffect(()=>{
        input.current.onkeyup = handleChange
        input.current.value = name
    })

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }
  return (
  <>
   <input type='text' ref={input} />
   Name is: {name}
  </>
  )
}

// Here the value and the event handler are assigned to the input element in the useEffect hook. 
// This is because the component has to be rendered and the DOM objects have to be ready 
// before we use it to access the value or listen to the events.

// The input element handled this way is called “uncontrolled component”.