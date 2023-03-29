import React, { Component } from 'react'  
import Comp1 from "./Comp1";  
import Comp2 from "./Comp2";  
export class Hideshow extends Component {  
    constructor() {  
        super();  
        this.state = {  
            name: "ReactJS",  
            showHideComp1: false,  
            showHideComp2: false,  
        };  
        this.hideComponent = this.hideComponent.bind(this);  
    }  
    hideComponent(name) {  
        console.log(name);  
        switch (name) {  
            case "showHideComp1":  
                this.setState({ showHideComp1: !this.state.showHideComp1 });  
                break;  
            case "showHideComp2":  
                this.setState({ showHideComp2: !this.state.showHideComp2 });  
                break;  
            default:  

            break;
                // null;  
        }  
    }  
    render() {  
        const { showHideComp1, showHideComp2 } = this.state;  
        return (  
            <div>  
                    <div class="col-sm-12 btn btn-info">  
                        Show Hide component on Click in React JS App  
                         </div>  
                {showHideComp1 && <Comp1 />}  
                <hr />  
                {showHideComp2 && <Comp2 />}  
                <hr />  
                <div>  
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp1")}>  
                        Click to hide Demo1 component  
              </button>  
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp2")}>  
                        Click to hide Demo2 component  
              </button>  
                </div>  
            </div>  
        );  
    }  
}  
  
  
export default Hideshow  