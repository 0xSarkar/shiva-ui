import classNames from "classnames"
import React from "react"

function ModalHeader({ children, className, setIsOpen }) {
  const defaultClasses = "text-xl text-neutral-900"
  const updatedClasses = classNames(defaultClasses, className)
  
  return (
  <div className="flex items-center justify-between px-6 pt-4 pb-2.5 border-b rounded-t">
    <h3 className={updatedClasses}>
      {children}
    </h3>
    <button type="button" className="z-50 text-gray-600 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-full p-1.5 -mr-1.5" onClick={() => setIsOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    </button>
  </div>
  )
}

export default ModalHeader
