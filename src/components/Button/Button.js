import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts";

function Button({ children, variant="primary", className, ...props }) {
  let defaultClasses = "inline-block rounded px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110"

  const theme = useContext(ThemeContext)

  switch(variant) {
    case "primary":
      defaultClasses = classNames(defaultClasses, theme.primary.bg, "text-white")
      break
    case "secondary":
      defaultClasses = classNames(defaultClasses, theme.secondary.bg, "text-white")
      break
    case "neutral":
      defaultClasses = classNames(defaultClasses, theme.neutral.bg, "text-gray-800 hover:brightness-95")
      break
    case "boxed":
      defaultClasses = classNames(defaultClasses, "bg-transparent border text-gray-800 hover:border-gray-300 hover:text-gray-900")
      break
    case "success":
      defaultClasses = classNames(defaultClasses, theme.success.bg, "text-white")
      break
    case "danger":
      defaultClasses = classNames(defaultClasses, theme.danger.bg, "text-white")
      break
    case "warning":
      defaultClasses = classNames(defaultClasses, theme.warning.bg, "text-gray-800")
      break
    case "info":
      defaultClasses = classNames(defaultClasses, theme.info.bg, "text-white")
      break
    case "light":
      defaultClasses = classNames(defaultClasses, "bg-white text-gray-800 hover:bg-gray-100")
      break
    case "dark":
      defaultClasses = classNames(defaultClasses, "bg-slate-600 text-white hover:bg-slate-500")
      break
    case "link":
      defaultClasses = classNames(defaultClasses, "bg-transparent text-blue-500 underline hover:text-blue-700").replace("shadow", "").replace("hover:shadow-lg", "")
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