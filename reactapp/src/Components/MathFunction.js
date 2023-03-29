import React,{useState} from 'react'    
function MathFunction() {    
    const[addition,setAddition] = useState(5) // Array Destructuring    
    return (    
        <div>    
            <label>Added Value is {addition}</label><br></br>    
            <button onClick={() => setAddition(addition+1)}>Add 1 Value</button>    
        </div>    
    )    
}      
export default MathFunction   