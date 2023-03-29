import React, { Component } from 'react'  
import PropTypes from 'prop-types'  
  
export class Movement extends Component {  
  
    static propTypes = {  
        render: PropTypes.func.isRequired  
    }  
  
    state={x:0,y:0}    
      
    onMouseMove =(event) => {  
        this.setState({  
            x:event.clientX,  
            y:event.clientY  
        })  
    }  
  
    render() {          
        return (  
            <div onMouseMove={this.onMouseMove}>  
               {this.props.render(this.state)}  
            </div>  
        )  
    }  
}  
  
export default Movement  