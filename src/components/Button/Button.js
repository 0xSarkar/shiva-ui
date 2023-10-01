import React from "react";
import classNames from "classnames";

function Button({ children, className, ...props }) {
  const defaultClasses = "inline-block rounded bg-blue-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-blue-500";
  const updatedClasses = classNames(defaultClasses, className);

  return (
  <button {...props} className={updatedClasses}>
    {children}
  </button>
  )
}

export default Button;