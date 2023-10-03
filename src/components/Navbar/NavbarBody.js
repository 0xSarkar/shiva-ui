import React from 'react'

function NavbarBody({ children }) {
  return (
    <div className='flex flex-col gap-2 justify-start md:flex-row md:items-center'>
      {children}
    </div>
  )
}

export default NavbarBody