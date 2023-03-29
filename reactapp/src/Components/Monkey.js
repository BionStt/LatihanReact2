import React, {Component} from 'react';
import monkey from '../images/monkey.jpg';
import banana from '../images/banana.jpg';

export class Monkey extends Component{
    render(){
        const{x,y} = this.props.Movement;

        return(
            <div>
                 <img src={monkey} alt='monkey' style={{position:'relative',left:x,right:y,height:150}}></img>                      
                <img src={banana} alt='banana' style={{position:'relative',left:(x+10),right:(y+10),height:30}}></img>    
            </div>
        );
    }
}
export default Monkey;