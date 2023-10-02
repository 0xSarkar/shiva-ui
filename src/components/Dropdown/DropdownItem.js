import classNames from 'classnames'
import React from 'react'

function DropdownItem({ setIsOpen, children, className, ...props }) {
  const defaultClasses = 'px-3 py-1.5 hover:bg-gray-100 cursor-pointer'
  const updatedClasses = classNames(defaultClasses, className)

  const handleItemClick = () => {
    setIsOpen(false)
  }

  return (
    <div className={updatedClasses} onClick={() => props.onClick ? props.onClick : handleItemClick()}>
      {children}
    </div>
  )
}

export default DropdownItem