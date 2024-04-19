import React, { createContext } from "react";
import { data } from "../data";
import useLocalStorage from "use-local-storage";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("language", "en");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };
  const langData = data[language];

  const contextValues = {
    langData,
    darkMode,
    language,
    toggleDarkMode,
    toggleLanguage,
  };
  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
