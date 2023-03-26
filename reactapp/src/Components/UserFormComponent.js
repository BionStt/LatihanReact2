import React, { Component } from 'react';
import Input2 from './UserFormInputComponent';

class UserForm extends Component{
    constructor(props){
        super(props);
        this.state={
            UserName:"",
            handleChange: this.handleChange.bind(this)
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        alert('Inputted value is :'+ this.state.UserName);  
        e.preventDefault();  
    }

    handleChange(e){
        this.setState({  
            UserName:e.target.value})  
         e.preventDefault();  
    }

    render(){
        return(  
            <form onSubmit={this.handleSubmit}>  
                    <Input2 name={"inputText"} title={"FullName"}      value={this.state.UserName}  
                    placeholder={"Enter Name"}   
                    handleChange={this.state.handleChange}></Input2>  
                    <button type="submit">Submit</button>  
                    <br/>
            </form>  
     )  
    }


}

export default UserForm;