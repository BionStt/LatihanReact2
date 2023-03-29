import React, { Component } from 'react'    
import TableRowComponent from './TableRowComponent'    
    
export class EmployeeListUsingTableRow extends Component {    
    constructor(props) {    
        super(props)    
        
        this.state = {    
             Employees:[    
                 {    
                     Id : 1,    
                     Name : 'ABC',    
                     ContactNumber: '1123456789'    
                 },    
                 {    
                    Id : 2,    
                    Name : 'XYZ',    
                    ContactNumber: '09873643775'    
                },    
                {    
                    Id : 3,    
                    Name : 'MNO',    
                    ContactNumber: '29354546675'    
                }    
             ]    
        }    
    }    
        
    tableRow(){    
        if(this.state.Employees instanceof Array){    
            return this.state.Employees.map(function(object,i){    
                return <TableRowComponent obj={object} key={i}></TableRowComponent>    
            })    
        }    
    }    
    render() {    
        return (    
            <div className="container">    
                <table>    
                    <thead>    
                        <tr>    
                            <td>Employee Id</td>    
                            <td>Employee Name</td>    
                            <td>Contact Number</td>    
                        </tr>    
                    </thead>    
                    <tbody>    
                        {this.tableRow()}    
                    </tbody>    
                </table>    
            </div>    
        )    
    }    
}    
    
export default EmployeeListUsingTableRow 