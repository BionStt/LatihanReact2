import React from 'react'
import {ToastContainer,toast,Zoom,Slide,Flip,Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {cssTransition} from 'react-toastify'


const AnimationToastr = () => {
  return (
    <div>
      <h4 className="navheader" align="center">Transition effect</h4>    
        <button  className="btn btn-success btnspace" onClick={()=>toast("Success Message", { type: toast.TYPE.INFO,  transition: Flip})}>Flip Effect </button>  
        <button  className="btn btn-success btnspace" onClick={()=>toast("Success Message", { type: toast.TYPE.INFO,  transition:Bounce})}>Bounce Effect </button>  
        <button  className="btn btn-success btnspace" onClick={()=>toast("Success Message", { type: toast.TYPE.INFO,  transition:Slide})}>Slide Effect </button>  
        
        <button  className="btn btn-success btnspace" onClick={()=>toast("Success Message", {  draggable: true})}>Draggable </button> 
        <ToastContainer />  
    </div>
  )
}

export default AnimationToastr
