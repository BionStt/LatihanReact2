import React from 'react';
import ChildComponent from './ChildComponent';

class MasterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            master : 'master',
            message : ""
        };
        this.greetHandler = this.greetHandler.bind(this);
        
    }

    greetHandler(childName){
        if(typeof(childName) =='object'){
            this.setState({
                message : 'This is ${this.state.message}'
            });
        }else{
            this.setState({
                message : 'This is ${this.state.message} from ${childName}'
            });
        }


       

    }

    render(){
        return(
            <div>
            <p>{this.state.message}</p>
            <button onClick={this.greetHandler}>
                I am parent, Click Me
            </button>
            <ChildComponent greetChild={this.greetHandler}></ChildComponent>
        </div>
        )
    }
}

export default MasterComponent;