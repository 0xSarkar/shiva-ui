import React, { useRef, useEffect, useState } from "react";
import { Children, cloneElement } from "react"

import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import classNames from "classnames";

function ModalBox({ children, className, isOpen, setIsOpen, isTransitioning, setIsTransitioning }) {

  const modalRef = useRef(null)

  const defaultClasses = `bg-white mx-auto w-full shadow-lg rounded ${isTransitioning && isOpen? "scale-100" : "scale-75"} transition max-w-md`
  const updatedClasses = classNames(defaultClasses, className)

  useEffect(() => { 
    // Function to handle clicks outside the modal
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, so close it
        setIsOpen(false);
      }
    }

    // Attach the event listener when the modal is open
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
  }, [isOpen, setIsOpen]);

  return(
  (isOpen || isTransitioning) && 
  <div className={`fixed z-50 top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto inset-0 bg-black/30 flex items-center justify-center p-4`}>
    <div ref={modalRef} className={updatedClasses}>
      {
        Children.map(children, (child) => {
          if(child.type == ModalHeader)
            return cloneElement(child, {setIsOpen:setIsOpen})
        })
      }
      {
        Children.map(children, (child) => {
          if(child.type == ModalBody)
            return cloneElement(child)
        })
      }
      {
        Children.map(children, (child) => {
          if(child.type == ModalFooter)
            return cloneElement(child)
        })
      }
    </div>
  </div>
  )
}

export default ModalBox