import React from 'react'
import './ClockDemo.css';  
import Clock from 'react-live-clock';  

export default function ClockLiveDemo() {
  return (
    <>
   <div className="container">  
         <div class="row" className="hdr">  
            <div class="col-sm-12 btn btn-info">  
                 How To Show a Clock in ReactJS  
            </div>  
          </div>  
         <div className="clk">  
             <Clock format={'HH:mm:ss'} ticking={true} />  
           </div>  
    </div>  
   </>
  )
}
