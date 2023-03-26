import React from 'react';
class States extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.onClick = this.onClick.bind(this);
    }

    render(){
        return(
            <div onClick={this.onClick}>{this.state.count}</div>
        );
    }

    onClick(){
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
    }
}
export default States;