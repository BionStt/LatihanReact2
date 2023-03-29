import React,{Component} from 'react';

class Movement extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        }
    }

    onMouseMove =(event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }

    render(){
        const{x,y} = this.state
        return(
            <div style={{height:'100%'}} onMouseMove={this.onMouseMove}>
                <h1>The current mouse position is ({x},{y})</h1>
            </div>
        );
    }
}

export default Movement;