import React,{useState} from 'react'

export default function SampleInput() {
    const [name,setName] = useState('Sutanto')
   
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }
  return (
  <>
   Name:
      <input
        type='text'
        value={name}
        onChange={handleChange}
      />
       Name is :{name}
  </>
//    As we can see, the value of the input text field is set using a value in state, 
// and the state is updated on the onChange event handler using the value present in the text field.
//  This way, two-way binding is established and the value shown in the div element below the text field 
// gets updated on whenever a key is pressed in the textbox
//The input element controlled this way is called a “controlled component”.

  )
}
