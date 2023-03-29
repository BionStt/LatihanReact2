import React, { Component } from 'react'  
// import { UserConsumer } from './UserContext';  
 
import { UserConsumer,ThemeConsumer } from './UserContext';   
class ProfileComponentForContext extends Component {  
    render() {  
        // return (  
        //    <UserConsumer>  
        //        {  
        //            (username) => {  
        //                return <div>Hello {username}</div>  
        //            }  
        //        }  
        //    </UserConsumer>  
        // ) 
        
        return (  
            <UserConsumer>  
                {  
                    username => (  
                     <ThemeConsumer>  
                     {color => (  
                          <div style={{ color: color }}>Hello {username}</div>  
                     )}           
                     </ThemeConsumer>         
                )}  
            </UserConsumer>  
         )  
        
    }  
}  
  
export default ProfileComponentForContext  