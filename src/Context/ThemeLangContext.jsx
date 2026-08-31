import { createContext, useState, useEffect } from "react";

export const ThemeLangContext = createContext();

export const ThemeLangProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("id");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <ThemeLangContext.Provider value={{ theme, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeLangContext.Provider>
  );
};
