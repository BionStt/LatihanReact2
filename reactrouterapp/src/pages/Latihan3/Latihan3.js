import React from 'react'
import DisplayList from './Component/DisplayList'
import DisplayEmptyList from './Component/DisplayEmptyList'
import DisplayListDenganConditionalProps from './Component/DisplayListDenganConditionalProps'
import RenderingListWithFaker from './Component/RenderingListWithFaker'
import { FixedSizeList } from 'react-window'

import {faker }from "@faker-js/faker"

import FetchOutput from './Component/FetchComponent/FetchOutput'
import FetchCustomizingLoading from './Component/CustomizingLoadingFetch/FetchCustomizingLoading.jsx'
import ScrollingFetchPutput from './Component/ScrollingFetchUseIterator/ScrollingFetchPutput'
import IncorporatingReactMarkdownOutput from './Component/IncorporatingReactMarkdown/IncorporatingReactMarkdownOutput'
import SuspenseWithErrorBoundaryOutput from './Component/SuspenseWithErrorBoundary/SuspenseWithErrorBoundaryOutput'
import StatusComponentRenderingWithSuspenseOutput from './Component/StatusComponentRenderingWithSuspense/StatusComponentRenderingWithSuspenseOutput'

const firstUserUtkEmptyDisplay = [
    { id: "0391-3233-3201",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@mtnwilsons.com",
    admin: false
  },
  { id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false
}]

const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 }
  ];
  
  const bigList = [...Array(5000)].map(() => ({
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
  }));

  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  )
  
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  )

export default function Latihan3() {
  return (
    
    <div>
        <br/>
        <br/>
        <p><strong>Status component rendering dengan suspense</strong></p>
        <StatusComponentRenderingWithSuspenseOutput></StatusComponentRenderingWithSuspenseOutput>
        <br/>
        <br/>
        <p>Suspense with error boundary </p>
        <SuspenseWithErrorBoundaryOutput></SuspenseWithErrorBoundaryOutput>
        <br/>
        <br/>
        <p>incorporating dengan react markdown</p>
        <IncorporatingReactMarkdownOutput></IncorporatingReactMarkdownOutput>
        <br/>
        <br/>
        <p>Scrolling fetch dengan useIterator</p>
        <ScrollingFetchPutput></ScrollingFetchPutput>
        <br/>
        <br/>
        <p>Customizing fetch loading neh</p>
        <FetchCustomizingLoading></FetchCustomizingLoading>
        <br/>
        <br/>
        <p>fetch Component</p>
        <FetchOutput></FetchOutput>
        <br/>
        <br/>
        <p>Display list dari constan data</p>
        <DisplayList></DisplayList>
        <br/>
        <br/>
        <p>Display empty list liat source code</p>
        <DisplayEmptyList renderEmpty={<p>This list is empty</p>}></DisplayEmptyList>
        <br/>
        <p>cara passing multiple propss</p>
        <DisplayEmptyList data ={firstUserUtkEmptyDisplay} renderEmpty={<p>This list is empty</p>}></DisplayEmptyList>
        <br/>
        <br/>
        <p>diplay list dengan conditional props</p>
        <DisplayListDenganConditionalProps
         data={tahoe_peaks}
         renderEmpty={<p>This list is empty</p>}
         renderItem={item => (
           <>
             {item.name} - {item.elevation.toLocaleString()}
           </>
         )}
        ></DisplayListDenganConditionalProps>
        <br/>
        <br/>
        <p>Rendering list with Faker</p>
        <RenderingListWithFaker data={bigList} renderItem={renderItem} ></RenderingListWithFaker>
        <br/>
        <br/>
        <p>rendering list faker dengan react window..apa itu react window ... ada scrollnya</p>
        <FixedSizeList
          height={window.innerHeight}
          width={window.innerWidth - 20}
          itemCount={bigList.length}
          itemSize={50}
        >
       {renderRow}
       </FixedSizeList>
        <br/>
        <br/>


    </div>
  )
}
