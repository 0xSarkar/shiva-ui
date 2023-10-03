import React from 'react'
import classNames from 'classnames'

function NavbarList({className, children, isOpen, setIsOpen}) {
  const defaultClasses = `${isOpen? 'flex' : 'hidden'} flex-col md:flex md:flex-row items-stretch md:items-center`
  const updatedClasses = classNames(defaultClasses, className)

  return (
    <div className={updatedClasses}>
      {children}
    </div>
  )
}

export default NavbarList