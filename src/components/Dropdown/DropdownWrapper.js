import React, { Children, cloneElement } from 'react'
import DropdownButton from './DropdownButton'
import classNames from 'classnames'
import DropdownList from './DropdownList'

function DropdownWrapper({ isOpen, setIsOpen, className, children }) {
  const defaultClasses = "inline-block relative"

  const updatedClasses = classNames(defaultClasses, className)

  return (
    <div className={updatedClasses}>
    {
      Children.map(children, (child) => {
        if(child.type == DropdownButton)
          return cloneElement(child, {isOpen, setIsOpen})
      })
    }
    {
      Children.map(children, (child) => {
        if(child.type == DropdownList)
          return cloneElement(child, {isOpen, setIsOpen})
      })
    }
    </div>
  )
}

export default DropdownWrapper