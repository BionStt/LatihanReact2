import React from 'react';

function EmployeeList2(){
    const employee =['asdasd','zfzsfzf'];
    // const employeeList = employee.map(emp => <h2>{emp}</h2>); //cara ini jg bisa dengan variable menampung data perulangan   
    return(
        <div>
            {employee.map(emp=><h2>{emp}</h2>)}
        </div>
        //  <div>{employeeList}</div>    
    )
}

export default EmployeeList2;