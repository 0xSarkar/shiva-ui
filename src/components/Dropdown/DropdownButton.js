import classNames from 'classnames'
import React from 'react'
import Button from '../Button'

function DropdownButton({ isOpen, setIsOpen, className, variant="primary", direction, children }) {
  const defaultClasses = "pl-4 pr-2.5 flex items-center z-50 relative"
  const updatedClasses = classNames(defaultClasses, className)

  return (
    <Button className={updatedClasses} variant={variant} onClick={() => setIsOpen(!isOpen)}>
      {children}
      <div className={`ml-2 transition ${isOpen ? 'rotate-180' : ''}`}>
        {
          (direction === "down") && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        }
        {
          (direction === "right") && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        }
        
      </div>
    </Button>
  )
}

export default DropdownButton