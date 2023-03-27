import React,{Component,Fragment} from 'react';  
  
const info = {  
        color: 'blue',  
        fontWeight: 'bold',  
        padding: '4px'  
}  
  
const error = {  
        color: 'red',  
        fontWeight: 'bold',  
        padding: '4px'  
}  
  
class Fragments3 extends Component{  
        constructor(props){  
                super(props);  
                this.state={   
                        UserName : "",  
                        isClicked : false  
                }  
                this.handleSubmit = this.handleSubmit.bind(this);  
                this.handleInput = this.handleInput.bind(this);  
        }  
  
        handleSubmit(){  
                this.setState({  
                        isClicked :true  
                });  
        }  
  
        handleInput(e){  
                this.setState({  
                        UserName: e.target.value  
                })  
        }  
  
        render(){   
                return(  
                        <Fragment>  
                            <p>disini onchange pada input berfungsi</p>
                                <label>Name : </label>   
                                <input type='text' name='txtuser' id='textuser' value={this.state.UserName} onChange={this.handleInput}/>  
                               <button onClick={this.handleSubmit}> Click Me !</button><br/>  
                                {this.state.isClicked ? (   
                                        <p style={info}>You clicked button, your name is <b>{this.state.UserName}</b></p>   
                                ):(   
                                        <p style={error}>Please Click button</p>   
)}   
                       </Fragment>  
                )  
        }  
}  
  
export default Fragments3;  