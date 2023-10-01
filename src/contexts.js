import React, { createContext, useState } from "react";
import { themeConfig } from "./theme";

const ThemeContext = createContext('default')

const ThemeProvider = ({ children }) => {
  const [themeOptions, setThemeOptions] = useState(null)

  return (
    <ThemeContext.Provider value={themeConfig}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }