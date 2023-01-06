import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import icons from "../constants/icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    const ctheme = theme == "dark" ? "light" : "dark";
    setTheme(ctheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", theme == "dark");
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <label
      htmlFor="themeSwitch"
      className="swap swap-rotate btn btn-square text-xl btn-sm px-5 py-5"
    >
      <input
        type="checkbox"
        checked={theme == "dark"}
        onChange={(e) => toggleTheme()}
        id="themeSwitch"
        aria-label="theme switcher"
      />

      <span className="swap-on">{icons.light}</span>
      <span className="swap-off">{icons.dark}</span>
    </label>
  );
};

export default ThemeSwitch;
