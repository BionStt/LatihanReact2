import React from 'react'
import Addition from './Component/Addition'
import Addition2 from './Component/Addition2'
import Toastr from './Component/AnimationToastr'
import CustomToastr from './Component/CustomToastr'
import Sweetalertdemo from './Component/Sweetalertdemo'
import Calculation from './Component/Calculation'
import ChangeColor from './Component/ChangeColor'
import ClockDemo from './Component/ClockDemo'
import ClockDemoWithClass from './Component/ClockDemoWithClass'
import ClockDemoFromGeeks from './Component/ClockDemoFromGeeks'
import ClockLiveDemo from './Component/ClockLiveDemo'



const Latihan1 = () => {
  return (
    <div>
      <h1>Haloo Latihan 1 nih</h1>
        <Addition></Addition>
        <Addition2></Addition2>
        <br/>
        <Toastr></Toastr>
        <br/>
        <CustomToastr></CustomToastr>
        <br/>
        <Sweetalertdemo></Sweetalertdemo>
        <br/>
        <Calculation></Calculation>
        <br/>
        <ChangeColor></ChangeColor>
        <br/>
        <ClockDemo></ClockDemo>
        <br/>
        <ClockDemoWithClass></ClockDemoWithClass>
        <br/>
        <ClockDemoFromGeeks></ClockDemoFromGeeks>
        <br/>
        <ClockLiveDemo></ClockLiveDemo>
        <br/>
    </div>
  )
}

export default Latihan1
