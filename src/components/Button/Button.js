import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts";

function Button({ children, variant="primary", className, ...props }) {
  const theme = useContext(ThemeContext)

  let defaultClasses = {
    "primary": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.primary.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "secondary": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.secondary.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "neutral": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.neutral.bg} text-xs text-gray-800 font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-95`,
    
    "boxed": `inline-block rounded px-5 pb-2 pt-2.5 bg-transparent border text-xs text-gray-800 font-medium uppercase leading-normal shadow hover:shadow-lg hover:border-gray-300 hover:text-gray-900`,
    
    "success": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.success.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "danger": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.danger.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "warning": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.warning.bg} text-xs text-gray-700 font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "info": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.info.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "light": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.light.bg} text-xs text-gray-800 font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-95`,
    
    "dark": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.dark.bg} text-xs text-white font-medium uppercase leading-normal shadow hover:shadow-lg hover:brightness-110`,
    
    "link": `inline-block rounded px-5 pb-2 pt-2.5 bg-transparent text-xs text-blue-500 underline font-medium uppercase leading-normal hover:text-blue-700`,
  }

  const updatedClasses = classNames(defaultClasses[variant], className);

  return (
  <button {...props} className={updatedClasses}>
    {children}
  </button>
  )
}

export default Button;