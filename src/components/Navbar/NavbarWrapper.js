import React from 'react'

function NavbarWrapper({ children }) {
  return (
    <div className='shadow p-2'>
      {children}
    </div>
  )
}

export default NavbarWrapper