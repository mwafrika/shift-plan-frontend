import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-[100%]">
       <div className="w-[18%]">
       <Sidebar />
       </div>
       <div className="w-[82%]">
       <Topbar />
       <div>{children}</div>
       </div>
    </div>
  )
}

export default Layout