import React,{Component} from 'react';

class EventBinding extends Component{
    constructor(props){
        super(props);
        this.state = {
            message :"Testing"
        }
        this.clickHandler = this.clickHandler.bind(this) //ini adalah contoh bind dlm constructor
        
    }

    clickHandler(){
        this.setState({
            message:"Tested"
        })
    }

    render(){
        return(
            <div>
                {this.state.message}<br/>
                {/* <button onClick={this.clickHandler.bind(this)}>Test</button><br/> */}
                {/* <button onClick={() => this.clickHandler}>Test</button>   yg ini gak berfungsi */}
                <button onClick={this.clickHandler}>Test</button>  


            </div>
        );
    }

}

export default EventBinding;