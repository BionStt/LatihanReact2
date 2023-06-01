import React,{useState} from 'react'

const Calculation = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    
//     const handleFirstName=(e)=>{  
//         this.setState({  
//                 firstName : e.target.value  
//         });   
// }  

const handleClick= (e)=>{  
        // this.setState({  
        //         fullName : this.state.firstName  
        // });  

        setName(firstName)
        // setName(e.target.value)
    }  


  return (
    <div>
        <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
       {/* <input type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleFirstName}></input>    */}
                                <button onClick={handleClick}>Click Me!</button>  
                                <p> {name}</p>  
    </div>
  )
}

export default Calculation
