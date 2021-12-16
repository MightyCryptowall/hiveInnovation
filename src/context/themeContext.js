import React, { createContext, useState } from "react";
import darkTheme from "../themes/darkTheme";
import defaultTheme from "../themes/defaultTheme" ;

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((preState) => !preState);
  };


  const getTheme = () => {
    return (darkMode) ? darkTheme : defaultTheme;
  }

  return (
    <ThemeContext.Provider value={{isDarkMode:darkMode, toggleTheme, getTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
