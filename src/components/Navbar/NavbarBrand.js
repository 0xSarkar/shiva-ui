import classNames from 'classnames'
import React from 'react'

function NavbarBrand({ className, children, isOpen, setIsOpen }) {
  const defaultClasses = "text-xl py-2 px-4 flex items-center justify-between"
  const updatedClasses = classNames(defaultClasses, className)

  const handleNavbarCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={updatedClasses}>
      <span>{children}</span>
      <div className='md:hidden' onClick={handleNavbarCollapse}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
    </div>
  )
}

export default NavbarBrand