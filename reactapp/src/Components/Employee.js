import React from 'react';

const Employee = (props) =>{
    return(
        <div>
            <legend>Personal Details </legend>
            <br/>
            Name    : {props.personalinfo.name}<br/>
            address : {props.personalinfo.address}<br/>
            zipcode : {props.personalinfo.zipcode}<br/>
            city    : {props.personalinfo.city}<br/>
            contactNumber : {props.personalinfo.contactnumber}<br/>

            <legend>Proffesional Detail</legend><br/>
            occupation  :  {props.proffessionalinfo.occupation}<br/>
            designation : {props.proffessionalinfo.designation}<br/>
            salary      : {props.proffessionalinfo.salary}<br/>
            <br/>
        </div>
    );
}

export default Employee;