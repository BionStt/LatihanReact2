import React from 'react'
import ContohDateTimePicker from './Component/ContohDateTimePicker'
import DatePickerWithClass from './Component/DatePickerWithClass'
import TooltipWithClass from './Component/TooltipWithClass'
import TabsWithReactTab from './Component/ContohTabs/TabsWithReactTab'
import ContohTabGroup from './Component/ContohTabs/ContohTabGroup'
import Banner from './Component/Banner'
import ContohModalExample from './Component/ContohModal/ContohModalExample'
import Garage from './Component/FuncCompPassData/Garage'


//berhubungan dengan kode A
import ContohInputWithHooks from './Component/ContohInputWithHooks'
import styled from 'styled-components';
//berhubungan dengan kode A

import Tabs from './Component/ContohTabs2/Tabs'
// Styling a regular HTML input berhubungan dgn kode A
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;



export default function Latihan2() {
  const inputProps = ContohInputWithHooks() // berhubungan dgn kode A

  return (
    <div>
       <h1>Haloo Latihan 2 nih</h1>
       <br/>
       <Garage></Garage>
       <br/>
     <Tabs></Tabs>
     <br/>
     {/* berhubungan dgn kode A */}
        <div>
            <StyledInput
            {...inputProps}
            placeholder="Type in here"
          />
          <span>Value: {inputProps.value} </span>
        </div>

       <br/>
      <ContohModalExample></ContohModalExample>
       <br/>
       <Banner></Banner>
       <br/>
       <br/>
       <ContohTabGroup></ContohTabGroup>
       <br/>
       <TabsWithReactTab></TabsWithReactTab>
       <br/>
      

       {/* <ContohDateTimePicker><ContohDateTimePicker/> */}
       
       <br/>
      <DatePickerWithClass></DatePickerWithClass>
      <br/>
      {/* <TooltipWithClass><TooltipWithClass/> */}
      <br/>
    

       </div>
  )
}
