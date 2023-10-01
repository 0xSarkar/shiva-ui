import React from "react";
import classNames from "classnames";

function Button({ children, variant="primary", className, ...props }) {
  let defaultClasses = ""

  switch(variant) {
    case "primary":
      defaultClasses = "inline-block rounded bg-blue-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-blue-500";
      break
    case "secondary":
      defaultClasses = "inline-block rounded bg-purple-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-purple-500";
      break
    case "neutral":
      defaultClasses = "inline-block rounded bg-neutral-200 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:bg-neutral-300 hover:text-gray-900";
      break
    case "boxed":
      defaultClasses = "inline-block rounded border bg-transparent px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:border-gray-300 hover:text-gray-900";
      break
    case "success":
      defaultClasses = "inline-block rounded bg-green-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-green-500";
      break
    case "danger":
      defaultClasses = "inline-block rounded bg-red-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-red-500";
      break
    case "warning":
      defaultClasses = "inline-block rounded bg-yellow-400 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:bg-yellow-300";
      break
    case "info":
      defaultClasses = "inline-block rounded border bg-sky-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-sky-400";
      break
    case "light":
      defaultClasses = "inline-block rounded bg-white px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:bg-gray-100";
      break
    case "dark":
      defaultClasses = "inline-block rounded bg-slate-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:bg-slate-500";
      break
    case "link":
      defaultClasses = "inline-block bg-transparent text-blue-500 underline px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-blue-600";
      break
  }
  
  const updatedClasses = classNames(defaultClasses, className);

  return (
  <button {...props} className={updatedClasses}>
    {children}
  </button>
  )
}

export default Button;