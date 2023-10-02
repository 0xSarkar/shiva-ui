import classNames from 'classnames'
import React, {Children, cloneElement, useState, useEffect, useRef} from 'react'
import DropdownItem from './DropdownItem'

function DropdownList({ isOpen, setIsOpen, className, children }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const listRef = useRef(null)

  const defaultClasses = `absolute z-40 w-max bg-white border border-gray-300 shadow-lg rounded mt-0.5 text-gray-800 text-sm ${isTransitioning && isOpen? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1/2"} transition`
  const updatedClasses = classNames(defaultClasses, className)

  // Function to handle clicks outside the list
  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.parentNode.contains(event.target)) {
      // Clicked outside the list, so close it
      setIsOpen(false);
    }
  }

  useEffect(() => {
    // Attach the event listener when the list is open
    if (isOpen) {
      setIsTransitioning(true) // whenever isOpen state changes, the component is in a transitioning state
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    (isOpen || isTransitioning) && 
    <div ref={listRef} className={updatedClasses}>
      {
        Children.map(children, (child) => {
          if(child.type == DropdownItem)
            return cloneElement(child, {setIsOpen})
        })
      }
    </div>
  )
}

export default DropdownList