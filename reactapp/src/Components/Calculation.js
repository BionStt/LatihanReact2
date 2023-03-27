import React from 'react';  
  
class Calculation extends React.Component{  
        constructor(props){  
                super(props);  
                this.state={  
                        firstName : "",  
                        fullName:""  
                }  
                this.handleFirstName = this.handleFirstName.bind(this);   
                this.handleClick = this.handleClick.bind(this);  
        }  
  
        handleFirstName(e){  
                this.setState({  
                        firstName : e.target.value  
                });   
        }  
  
        handleClick(e){  
                this.setState({  
                        fullName : this.state.firstName  
                });  
        }  
  
        render(){  
                console.log('rendered' + this.state.fullName);  
                return(  
                        <div>  
                                <input type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleFirstName}></input>   
                                <button onClick={this.handleClick}>Click Me!</button>  
                                <p> {this.state.fullName}</p>  
                        </div>  
                )  
        }  
}  
  
export default Calculation;  

// The above output in the console calls the render method each time a button is clicked even if no changes are made in the textbox.