import React, { useState } from "react";

export const ThemeContext = React.createContext({
  name: "light-mode",
  updateTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light-mode")
  
    return (
      <ThemeContext.Provider
        value={{
          name: theme,
          updateTheme: setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
}