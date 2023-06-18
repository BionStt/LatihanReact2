import React, { Component } from 'react'
import DatePicker from "react-datepicker";  

export default class DatePickerWithClass extends Component {
    constructor(props) {  
        super(props)  

        this.state = {  
                date: ''  
        }  
    }  
    Changedate = (e) => {  
            this.setState({  
                    date: e  
            });  
    };  
 
    render() {
    return (
        <div className="container">  
                 <div className="hdr">  
                          <div class="col-sm-12 btn btn-warning">  
                                   Datepicker in ReactJS  
                        </div>  
                  </div>  
                <div style={{ marginTop: "10px" }}>  
                        <div class="col-sm-4">  
                                <DatePicker className="form-control"  
                                        selected={this.state.date} placeholderText="Select Date" showPopperArrow={false}  
                                        onChange={this.Changedate}  
                                />  
                        </div>  

                </div>  
        </div>  
    )
  }
}
