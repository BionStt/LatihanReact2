import React, { Component } from 'react'    
    
class TableRowComponent extends Component {    
    render() {    
        return (    
            <tr>    
                <td>    
                    {this.props.obj.Id}    
                </td>    
                <td>    
                    {this.props.obj.Name}    
                </td>    
                <td>    
                    {this.props.obj.ContactNumber}    
                </td>    
            </tr>    
        )    
    }    
}    
    
export default TableRowComponent   