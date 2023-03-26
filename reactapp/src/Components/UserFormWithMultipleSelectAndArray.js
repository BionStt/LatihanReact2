import React,{Component} from 'react';  
import Input2 from './UserFormWithMultipleSelect';  
import Select from './Select';  
  
class UserFormWithMultipleSelectAndArray extends Component{  
           
        constructor(props){  
                super(props);  
                this.state={   
                        UserName:"",  
                        Gender:"",  
                        Skills:[""],  
                        genderOptions: ['Male', 'Female', 'Others'],  
                        skillOptions:         ['Programming', 'Development', 'Design', 'Testing']  
                }  
                  
                this.handleInput = this.handleInput.bind(this);  
                this.handleChange = this.handleChange.bind(this);  
                this.handleSubmit = this.handleSubmit.bind(this);   
        }  
  
        handleSubmit(e){  
                alert('Inputted value is :\n Name: '+ this.state.UserName + "\n Gender: " + this.state.Gender + "\n Skills: " + this.state.Skills);  
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
  
        handleChange(e) {  
                var options = e.target.options;  
                var value = [];  
                var name = e.target.name;  
                for (var i = 0, l = options.length; i < l; i++) {  
                        if (options[i].selected) {  
                                value.push(options[i].value);  
                        }  
                }  
                this.setState( prevState => {  
                    return {  
                        [name] : value   
                    }}, () => console.log(name + "," + value))   
       }  
  
        render(){  
                return(  
                        <form onSubmit={this.handleSubmit}>  
                                <div class="form-group">  
                                        <Input2 name={"UserName"}   
                                                   title={"FullName"}   
                                                   value={this.state.UserName}  
                                                   placeholder={"Enter Name"}   
                                                   handleTextInput={this.handleInput}>  
                                       </Input2> 
                                       <br/> 
                                 </div>  
                                <div class="form-group">  
                                      <Select multiple={false}   
                                                  name={"Gender"}   
                                                  title="Gender"   
                                                  value={this.state.Gender}   
                                                  options={this.state.genderOptions}  
                                                  placeholder={"Select Gender"}   
                                                  handleChange={this.handleInput} >  
                                      </Select>  
                                      <br/>
                                </div>  
                              <div class="form-group">  
                                     <Select multiple={true}   
                                                 name={"Skills"}   
                                                 title="Skills"   
                                                 value={this.state.Skills}   
                                                 options={this.state.skillOptions}  
                                                 placeholder={"Select Skills"}   
                                                 handleChange={this.handleChange} >  
                                     </Select> 
                                     <br/> 
                             </div>  
                            <button type="submit">Submit</button>  
                     </form>  
               )  
          }   
}  
  
export default UserFormWithMultipleSelectAndArray;  