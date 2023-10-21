import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'

const Layout = ({ children, user, username }) => {
  return (
    <div className="flex flex-row w-[100%]">
       <div className="w-[18%]">
       <Sidebar />
       </div>
       <div className="w-[82%]">
       <Topbar user={user} name={username}/>
       <div>{children}</div>
       </div>
    </div>
  )
}

export default Layout