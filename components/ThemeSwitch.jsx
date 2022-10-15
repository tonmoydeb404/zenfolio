import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Swap } from "react-daisyui";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Swap
      className="btn btn-square text-xl btn-sm px-5 py-5"
      rotate
      onElement={<i className="bx bx-moon"></i>}
      offElement={<i className="bx bx-sun"></i>}
      checked={theme == "dark"}
      onChange={toggleTheme}
    ></Swap>
  );
};

export default ThemeSwitch;
