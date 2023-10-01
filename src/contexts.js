import React, { createContext, useState } from "react";

const ThemeContext = createContext('default')

const ThemeProvider = ({ children, themeOptions }) => {
  return (
    <ThemeContext.Provider value={themeOptions}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }