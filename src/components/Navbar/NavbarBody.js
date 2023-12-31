import React, { Children, cloneElement } from 'react'

function NavbarBody({ children, isOpen, setIsOpen }) {
  return (
    <div className='flex flex-col md:flex-row md:items-center'>
      {
        Children.map(children, (child) => {
          return cloneElement(child, {isOpen, setIsOpen})
        })
      }
    </div>
  )
}

export default NavbarBody