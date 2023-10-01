import classNames from "classnames";
import React from "react";

function ModalFooter({ children, className }) {
  const defaultClasses = "py-3 px-6 border-t flex justify-end"
  const updatedClasses = classNames(defaultClasses, className)
  
  return (
  <div className={updatedClasses}>
    {children}
  </div>
  )
}

export default ModalFooter