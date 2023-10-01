import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts";

function Button({ children, variant="primary", className, ...props }) {
  let defaultClasses = ""

  const theme = useContext(ThemeContext)

  switch(variant) {
    case "primary":
      defaultClasses = `inline-block rounded ${theme.primary.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:brightness-110`;
      break
    case "secondary":
      defaultClasses = `inline-block rounded ${theme.secondary.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:brightness-110`;
      break
    case "neutral":
      defaultClasses = `inline-block rounded ${theme.neutral.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:brightness-95`;
      break
    case "boxed":
      defaultClasses = "inline-block rounded border bg-transparent px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:border-gray-300 hover:text-gray-900";
      break
    case "success":
      defaultClasses = `inline-block rounded ${theme.success.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:brightness-110`;
      break
    case "danger":
      defaultClasses = `inline-block rounded ${theme.danger.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:brightness-110`;
      break
    case "warning":
      defaultClasses = `inline-block rounded ${theme.warning.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow hover:shadow-lg hover:brightness-110`;
      break
    case "info":
      defaultClasses = `inline-block rounded ${theme.info.bg} px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow hover:shadow-lg hover:brightness-110`;
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