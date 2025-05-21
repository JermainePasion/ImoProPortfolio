import React from 'react'
import Navbar from './Navbar'

const DashboardLayout = ({children}) => {
  return (
     <div className="flex flex-col">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  )
}

export default DashboardLayout