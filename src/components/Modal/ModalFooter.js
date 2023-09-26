import classNames from "classnames";
import React from "react";

function ModalFooter({ children, className }) {
  const defaultClasses = "py-3 px-4 border-t"
  const updatedClasses = classNames(defaultClasses, className)
  
  return (
  <div className={updatedClasses}>
    {children}
  </div>
  )
}

export default ModalFooter