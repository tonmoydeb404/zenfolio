"use client";

import { Button } from "@/components/ui/button";
import appIcons from "@/config/icons/app-icons";
import { useTheme } from "next-themes";

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
        <appIcons.LIGHT_MODE className="text-lg" />
      ) : (
        <appIcons.DARK_MODE className="text-lg" />
      )}
    </Button>
  );
};

export default ThemeButton;
