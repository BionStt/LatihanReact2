import React from 'react'
import ColorOrganizerOutput from './Component/ColorOrganizer/ColorOrganizerOutput'
import ErrorBoundary1 from './Component/ErrorBoundary1'
import ErrorBoundary2 from './Component/ErrorBoundary2'
import CompanyWebsiteOutput from './Component/CompanyWebsite/CompanyWebsiteOutput'

import { BrowserRouter as Router } from "react-router-dom";



export default function Latihan4() {
  return (
    <div>
      <br/>
      <br/>
      <p>Color organizer lumayan lengkap nih dalemannya</p>
      {/* <ErrorBoundary1>
      <ColorOrganizerOutput></ColorOrganizerOutput>
      </ErrorBoundary1> */}
      <br/>
      <br/>
      <p>Color organizer lumayan lengkap nih dalemannya</p>
      {/* <ErrorBoundary2>
      <ColorOrganizerOutput></ColorOrganizerOutput>
      </ErrorBoundary2> */}
      <br/>
      <br/>
      <p><strong>Company website contoh </strong></p>
      <CompanyWebsiteOutput></CompanyWebsiteOutput>
      
      <br/>
      <br/>


    </div>
  )
}
