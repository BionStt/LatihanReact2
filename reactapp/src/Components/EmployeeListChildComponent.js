import React from 'react';

function EmployeesChildComponent({emp}){
    return(
        <div>
             <h2>My name is {emp.name} working as {emp.position} and having salary {emp.salary} </h2> 
        </div>
    )
}

export default EmployeesChildComponent;