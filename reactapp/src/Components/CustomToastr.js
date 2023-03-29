import React, { Component } from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
import '../App.css';    
class CustomToastr extends Component {    
  render(){    
    return (    
      <div>    
        <h4 className="navheader" align="center">Custom Toastr</h4>      
        <button  className="btn btn-success btnspace" onClick={()=>toast.success("Success Message:Center", { position: toast.POSITION.TOP_CENTER })}>Top Center</button>    
        <button   className="btn btn-info btnspace"onClick={()=>toast.success("Success Message:Left", { position: toast.POSITION.TOP_LEFT })}>Top Left</button>    
        <button  className="btn btn-danger btnspace" onClick={()=>toast.success("Success Message:Bottom Center", {position:toast.POSITION.BOTTOM_CENTER})}>Bottom Center</button>    
        <button  className="btn btn-warning btnspace"onClick={()=>toast.success("Success Message:Bottom Left", { position: toast.POSITION.BOTTOM_LEFT },{closeButton:true})}>Bottom Left</button>    
    
        <button  className="btn btn-danger btnspace" onClick={()=>toast.success("Success Message", {closeButton:false})}>Remove </button>   

        <button  className="btn btn-success btnspace" onClick={()=>toast.success("Success Message", {autoClose: 1000 })}>AutoClose</button>   
        
        <ToastContainer />    
      </div>    
    );    
  }    
}    
    
export default CustomToastr   