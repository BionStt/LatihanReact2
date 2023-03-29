import React,{Component} from 'react';  
import MemoComp from './memo';  
  
class ParentComponentForMemo extends Component{  
        constructor(props){  
                super(props);  
                this.state={  
                        name : 'React'   
                }   
        }  
  
        componentDidMount(){  
                setInterval(()=>{  
                        this.setState({  
                                name:'React'  
                        })  
                },2000)  
        }  
  
        render(){  
                console.log('rendered parent');  
                return(  
                        <div>  
                                Parent Component  
                                <MemoComp name= {this.state.name}/>  
                        </div>  
                )  
        }  
}  
  
export default ParentComponentForMemo;  