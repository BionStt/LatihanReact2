import React, { Component } from 'react'  
import ProfileComponentForContext from './ProfileComponentForContext'  
import UserContext from './UserContext'  

class HomeComponentForContext extends Component {  
    render() {  
        return (  
            <div>  
                Home Component {this.contextType}
                <ProfileComponentForContext/>  
            </div>  
        )  
    }  
}  
  
HomeComponentForContext.contextType = UserContext  

export default HomeComponentForContext 