import React from 'react';  
  
class CalculationWithPureComponent extends React.PureComponent{  
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
  
export default CalculationWithPureComponent;  

// Now review the console, if there are no changes made in the textbox then on click of button render method is not called every time.

// Pure Component
 
// In React, a component is stated as pure only when it renders the same output for the same state and props and its return value is always the same for the same input values. Component extends React.PureComponent base class is treated as a pure component.
 
// Pure Component includes some performance improvements and renders optimization as React implements the shouldComponentUpdate() method for shallow comparison for props and state.
 
// Pure Component’s shouldComponentUpdate() method only compares the objects shallowly. In the case of using complex data structures, it can generate false negatives for deeper differences. When you are having simple props and state or use of forceUpdate() you can use this approach or you can use an immutable object incase of deep comparison of data.
 
// When PureComponent uses shouldComponentUpdate() method, it skips props updates for the entire component subtree. So when using it make sure all children are pure.

// Key points to remember while using Pure Component:
// If parent class is extending PureComponent then we must ensure that child class is also pure to avoid unexpected behavior.
// Always remember to never mutate the state, in state always returns a new object that is reflecting the new state.
// Pure Component will not be re-rendered if there is no change in props and state.
// Pure Component should be used with small applications.