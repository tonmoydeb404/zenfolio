import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Swap } from "react-daisyui";
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
    <Swap
      className="btn btn-square text-xl btn-sm px-5 py-5"
      rotate
      onElement={icons.dark}
      offElement={icons.light}
      checked={theme == "dark"}
      onChange={toggleTheme}
    ></Swap>
  );
};

export default ThemeSwitch;
