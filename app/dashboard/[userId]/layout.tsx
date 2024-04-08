import React from 'react'


export const metadata = {
    title: "Dashboard",
}

const DashboardLayout = ( { children }: { children:React.ReactNode } ) => {
  return (
    <div className='py-10 px-20'>{children}</div>
  )
}

export default DashboardLayout