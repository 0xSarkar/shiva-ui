import React, { useState } from 'react'
import classNames from 'classnames'

function DropdownItemNested({ children, className }) {
  const [isOpen, setIsOpen] = useState(false)

  const defaultClasses = 'hover:bg-gray-100 cursor-pointer'
  const updatedClasses = classNames(defaultClasses, className)

  const handleItemClick = () => {
    setIsOpen(true)
  }

  return (
    <div className={updatedClasses} onClick={handleItemClick}>
      {children}
    </div>
  )
}

export default DropdownItemNested