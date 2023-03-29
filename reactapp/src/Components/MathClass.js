import React, { Component } from 'react'      
class MathClass extends Component {      
    constructor(props) {      
        super(props)      
        this.state = {      
            addition: 0      
        }      
        this.incrementValue = this.incrementValue.bind(this)      
    }      
    incrementValue = () => {      
        this.setState({      
            addition: this.state.addition + 1      
        })      
    }      
    render() {      
        return (      
            <div>      
                <label>Added Value is {this.state.addition}</label><br></br>      
                <button onClick={this.incrementValue}>Add 1 Value</button>      
            </div>      
        )      
    }      
}    
export default MathClass    