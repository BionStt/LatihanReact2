import React,{Component,Fragment} from 'react';

class Fragments2 extends Component{
    constructor(props){
        super(props);  
        this.state={  
                UserName : ''  
        }  
    }

    render(){
        return(  
            <Fragment>  
                    <label>Name : </label>   
                    <input type='text' name='txtuser' id='textuser' value={this.UserName}/>  
                    <button> Click Me !</button>  
                    <br/>
            </Fragment>  
         )  
    }

}
// Here, fragments can be used for returning a list of elements without having to wrap them in the container or array. 
// This is useful when returning form and text markup, as wrapping those in a div can cause issues while applying styles.
export default Fragments2;