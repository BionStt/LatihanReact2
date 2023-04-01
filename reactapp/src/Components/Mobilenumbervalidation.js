import React from 'react';
import './Mobilenumbervalidation.css';  

class Mobilenumbervalidation extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state);
            let input = {};
            input["Mobilenumber"] = "";
            this.setState({ input: input });
            alert('Mobile Number submited Successfully');
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        if (!input["Mobilenumber"]) {
            isValid = false;
            errors["Mobilenumber"] = "Please enter your Mobile Number.";
        }

        if (typeof input["Mobilenumber"] !== "undefined") {

            var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
            if (!pattern.test(input["Mobilenumber"])) {
                isValid = false;
                errors["Mobilenumber"] = "Please Enter Number Only";
            } else if (input["Mobilenumber"].length < 10) {
                isValid = false;
                errors["Mobilenumber"] = "Please enter valid  Mobile Number.";
            }
        }



        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div className='container'>
                <div class="row " className="header">
                    <div class="col-sm-12 btn btn-info">
                        How to create a Signature pad in ReactJS Application
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div class="row form-group">
                        <div class="col-sm-4">
                            <label class="control-label col-sm-4" for="Mobilenumber">Mobile Number:</label>
                        </div>
                        <div class="col-sm-8">
                            <input
                                type="text"
                                name="Mobilenumber"
                                value={this.state.input.Mobilenumber}
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter Mobile Number"
                                id="email" />
                        </div>
                        <div className="text-danger mrgnbtn">{this.state.errors.Mobilenumber}</div>
                    </div>

                    <input type="submit" value="Submit" class="btn btn-info mrgnbtn" />
                </form>
            </div>
        );
    }
}

export default Mobilenumbervalidation;