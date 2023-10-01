import React, { useRef, useEffect, useState } from "react";
import { Children, cloneElement } from "react"
import ModalBox from "./ModalBox";

import classNames from "classnames";

function ModalBackdrop({children, isOpen, setIsOpen, className}) {
  const [isTransitioning, setIsTransitioning] = useState(false) 
  // we need this transition states for showing the opening and closing animations(CSS transitions)
  // isTransition is basically the copy of isOpen state but the false state has some delay (look in useEffect)

  const defaultClasses = `fixed z-50 top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto inset-0 bg-black/30 flex items-center justify-center p-4 ${isTransitioning && isOpen? "opacity-100" : "opacity-0"} transition-opacity`

  const updatedClasses = classNames(defaultClasses, className)

  return (
    (isOpen || isTransitioning) &&
    <div className={updatedClasses}>
    {
      Children.map(children, (child) => {
        if(child.type == ModalBox)
          return cloneElement(child, {isOpen, setIsOpen, isTransitioning, setIsTransitioning})
      })
    }
    </div>
  )
}

export default ModalBackdrop;