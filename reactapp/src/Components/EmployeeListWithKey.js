import React from 'react';
import EmployeesChildComponent from './EmployeeListChildComponent';

function EmployeeListWithKey(){
    const employee = [
        {
            id:1,
            name:'AFWFWFWEF',
            salary:'50$',
            position:'Jr.Developer'
        },
            {
                id:2,
                name:'ASDAF3ETY',
                salary:'150$',
                position:'project .Developer'
            },
            {
                id:3,
                name:'5TYJTJTYJ',
                salary:'250$',
                position:'senior .Developer'}
        
    ];

        // const employeeList1 = employee.map(emp => <EmployeesChildComponent emp={emp}></EmployeesChildComponent>   ); 

        const employeeList1 = employee.map(emp => <EmployeesChildComponent key= {emp.id} emp={emp}></EmployeesChildComponent>);    

        return <div>
            {employeeList1}
            {}
        </div>;


}

export default EmployeeListWithKey;