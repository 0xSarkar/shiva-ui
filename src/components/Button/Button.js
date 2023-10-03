import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts";

function Button({ children, variant="primary", className, ...props }) {
  const theme = useContext(ThemeContext)

  let defaultClasses = {
    "primary": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.primary.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "secondary": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.secondary.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "neutral": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.neutral.bg} text-xs text-gray-800 font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-95 disabled:opacity-50`,
    
    "boxed": `inline-block rounded px-5 pb-2 pt-2.5 bg-transparent border text-xs text-gray-800 font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:border-gray-300 enabled:hover:text-gray-900 disabled:opacity-50`,
    
    "success": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.success.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "danger": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.danger.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "warning": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.warning.bg} text-xs text-gray-700 font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "info": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.info.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "light": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.light.bg} text-xs text-gray-800 font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-95 disabled:opacity-50`,
    
    "dark": `inline-block rounded px-5 pb-2 pt-2.5 ${theme.dark.bg} text-xs text-white font-medium uppercase leading-normal shadow enabled:hover:shadow-lg enabled:hover:brightness-110 disabled:opacity-50`,
    
    "link": `inline-block rounded px-5 pb-2 pt-2.5 bg-transparent text-xs text-blue-500 underline font-medium uppercase leading-normal enabled:hover:text-blue-700 disabled:opacity-50`,

    "text": `inline-block px-5 pb-2 pt-2.5 bg-transparent text-xs text-gray-800 font-medium leading-normal disabled:opacity-50`,
  }

  const updatedClasses = classNames(defaultClasses[variant], className);

  return (
  <button {...props} className={updatedClasses}>
    {children}
  </button>
  )
}

export default Button;