"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

type Props = {
  className?: string;
};

const ThemeButton = ({ className = "" }: Props) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={toggleTheme}
      className={className}
    >
      {theme === "dark" ? (
        <MdLightMode className="text-lg" />
      ) : (
        <MdOutlineDarkMode className="text-lg" />
      )}
    </Button>
  );
};

export default ThemeButton;
