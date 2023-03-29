import React, { Component } from 'react'    
import TableRowComponent from './TableRowComponent'    
    
export class CompanyListUsingTableRow extends Component {    
    constructor(props) {    
        super(props)    
        
        this.state = {    
             Companies:[    
                 {    
                     Id :1,    
                     Name : 'Wipro',    
                     ContactNumber:'3567575'    
                 },    
                 {    
                    Id :2,    
                    Name : 'Google',    
                    ContactNumber:'3983945'    
                },    
                {    
                    Id :3,    
                    Name : 'Facebook',    
                    ContactNumber:'475686787'    
                }    
             ]    
        }    
    }    
        
    tableRow(){    
        if(this.state.Companies instanceof Array){    
            return this.state.Companies.map(function(object,i){    
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
                        <td>Company Id</td>    
                        <td>Company Name</td>    
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
    
export default CompanyListUsingTableRow    