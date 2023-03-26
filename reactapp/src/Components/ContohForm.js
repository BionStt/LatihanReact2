import React ,{Component }from 'react';

class UserForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        alert('Inputted value is : '+ this.input.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                                <label>Enter Name</label>  
                                <textarea type="text" ref={(input) => this.input = input}></textarea>  
                                <button type="submit">Submit</button>  
                        </form>  
        )
    }
}

export default UserForm;