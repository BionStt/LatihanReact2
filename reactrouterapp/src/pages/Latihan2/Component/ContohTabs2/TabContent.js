import React from 'react'
import './Tabs.css'

export default function TabContent({id, activeTab, children}) {
  return (
    activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
  )
}
