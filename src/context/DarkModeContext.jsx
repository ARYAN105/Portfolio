import { useState, createContext } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  ToggleDarkMode: () => {}, // function(){}
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

const ToggleDarkMode = () => {
    setDarkMode(!darkMode);

  };
  return (
    <DarkModeContext.Provider value={{ darkMode, ToggleDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
