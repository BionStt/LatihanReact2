import React from 'react';

class ConditionalRendering extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            IsLoggedIn:true
            // IsLoggedIn:false
        };
    }

    // render(){
    //     if(this.state.IsLoggedIn){
    //         return <div>Welcome User</div>
    //     }else{
    //         return <div>You need To Login</div>
    //     }
    // };

    //dibwh ini gunakan element variable bandingkan dengan diatas
    // render(){
    //     let message;
    //     if(this.state.IsLoggedIn){
    //                 message= <div>Welcome User</div>;
    //             }else{
    //                 message= <div>You need To Login</div>;
    //             }

    //     return message;
    // };


    //dibwh ini gunakan ternary operator
    render(){
        return this.state.IsLoggedIn? <div>Welcome User</div> :"";
    };
    
}


export default ConditionalRendering;