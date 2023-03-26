import React from 'react';

function EmployeeList3(){
    const employee =[{
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

    const employeeList = employee.map(emp => <h2>My name is    {emp.name} working as {emp.position} and having salary {emp.salary}     </h2>); 

        return(
            <div>
                {employeeList}
            </div>
        )

}

export default EmployeeList3;