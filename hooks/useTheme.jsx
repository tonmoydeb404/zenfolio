import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  //   checking local storage
  useEffect(() => {
    const localTheme = localStorage.getItem("PORTFOLIO_THEME");

    if (localTheme != null) {
      setTheme(localTheme);
    }
  }, []);

  //   updating theme
  useEffect(() => {
    // localStorage.setItem("PORTFOLIO_THEME", theme);

    const root = document.documentElement;

    root.classList.toggle("dark", theme == "dark");
    root.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevState) => {
      const ctheme = prevState == "dark" ? "light" : "dark";
      localStorage.setItem("PORTFOLIO_THEME", ctheme);
      return ctheme;
    });
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
