import React from 'react';

const Input2 = (props) =>{
    return(
        <div class="form-group">
             <label htmlFor={props.name} className="form-label">{props.title}</label>  
                           <input name={props.name}   
                                     className="form-input" id={props.name}  
                                     value={props.value}  
                                     placeholder ={props.placeholder}  
                                     onChange={props.handleChange}/>  

        </div>
    )

}

export default Input2;