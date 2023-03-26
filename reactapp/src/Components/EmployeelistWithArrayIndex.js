import React from 'react';

function EmployeeList(){
    const employee = ['zbc','arasdy'];
    return(
        <div>
            <h2>{employee[0]}</h2>
            <h2>{employee[1]}</h2>
        </div>
    )
}

export default EmployeeList;