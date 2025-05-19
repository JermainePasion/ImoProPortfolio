import React from 'react'
import Navbar from './Navbar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <div className='flex'>
      <Navbar/>
    </div>
  )
}

export default DashboardLayout