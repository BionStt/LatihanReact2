import React from 'react';
import EmployeesChildComponent from './EmployeeListChildComponent';

function EmployeeListParentComponent(){
    const employee = [
        {
            name:'AFWFWFWEF',
            salary:'50$',
            position:'Jr.Developer'
        },
            {
                name:'ASDAF3ETY',
                salary:'150$',
                position:'project .Developer'
            },
            {
                name:'5TYJTJTYJ',
                salary:'250$',
                position:'senior .Developer'}
        
    ];

        const employeeList1 = employee.map(emp => <EmployeesChildComponent emp={emp}></EmployeesChildComponent>   ); 

        return <div>
            {employeeList1}
            {}
        </div>;


}

export default EmployeeListParentComponent;