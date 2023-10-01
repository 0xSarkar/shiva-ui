import classNames from "classnames"
import React from "react"

function ModalBody({ children, className }) {
  const defaultClasses = "px-6 py-4 text-neutral-700"
  const updatedClasses = classNames(defaultClasses, className)
  
  return (
  <div className={updatedClasses}>
    {children}
  </div>
  )
}

export default ModalBody