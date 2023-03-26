import React from 'react';

class States2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
        this.onClick = this.onClick.bind(this);
    }

    render(){
        return(
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.onClick}>Counter</button>
          </div>
        );

    }

    onClick(){
        this.setState({
            count:this.state.count +1
        });
        console.log(this.state.count);
    }

}

export default States2;