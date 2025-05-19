import React from 'react'
import Navbar from './Navbar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <div className='flex'>
      <Navbar activeMenu={activeMenu}/>
        <div className='grow mx-5'>{children}</div>
    </div>
  )
}

export default DashboardLayout