import React, { Component } from 'react'  
export class Toggle extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            open: false,  
        };  
        this.togglebutton = this.togglebutton.bind(this);  
    }  
    togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
    }  
    render() {  
        var { title, children } = this.props;  
        const { open } = this.state;  
        if (open) {  
            title = 'Hide Component';  
        } else {  
            title = 'Show Component';  
        }  
        return (  
            <div className="container">  
                <div class="row" className="hdr">  
                    <div class="col-sm-12 btn btn-info">  
                        Show Hide component on Click in React JS App  
                         </div>  
                </div>  
                <div style={{ "marginTop": "10px" }}>  
                    <div class="col-sm-8 btn btn-success" onClick={this.togglebutton}>  
                        {title}  
                    </div>  
                    {open && (  
                        <div>  
                            {children}  
                        </div>  
                    )}  
                </div>  
            </div>  
        );  
    }  
}  
export default Toggle  