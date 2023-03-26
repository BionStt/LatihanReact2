import React,{Component} from 'react';  
import Input2 from './UserFormInputComponent';  
import Select from './Select';  
  
class UserFormWithSelect extends Component{  
         constructor(props){  
                  super(props);  
                  this.state={   
                           UserName:"",  
                           Gender:"",   
                           genderOptions: ['Male', 'Female', 'Others']  
                  }  
  
                  this.handleInput = this.handleInput.bind(this);  
                  this.handleSubmit = this.handleSubmit.bind(this);   
         }  
  
         handleSubmit(e){  
                  alert('Inputted value is :'+ this.state.UserName + "," + this.state.Gender);  
                  e.preventDefault();  
         }  
  
         handleInput(e) {   
                  let value = e.target.value;  
                  let name = e.target.name;  
                  this.setState( prevState => {  
                           return {  
                                    [name] : value   
                           }  
                  }, () => console.log(name + "," + value))  
         }  
  
         render(){  
                  return(  
                           <form onSubmit={this.handleSubmit}>  
                                    <Input2 name={"UserName"} title={"FullName"}
                                           value={this.state.UserName}  
                                           placeholder={"Enter Name"}                      
                                           handleTextInput={this.handleInput}>
                        </Input2>  
                                    <Select name={"Gender"}   
                                            title="Gender"   
                                            value=  {this.state.Gender}   
                                            options={this.state.genderOptions}  
                                            placeholder={"Select Gender"} handleChange={this.handleInput}>
                                    </Select>  
                                    <button type="submit">Submit</button>  
                           </form>  
                 )  
          }  
}  
  
export default UserFormWithSelect;  