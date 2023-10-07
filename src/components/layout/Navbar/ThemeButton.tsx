"use client";
import { Button } from "@/components/ui/button";
import appIcons from "@/config/icons/app-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const ThemeButton = ({ className = "" }: Props) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // rehydration problem fixed
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return <></>;

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <appIcons.LIGHT_MODE className="text-lg" /> : <></>}
      {theme === "light" ? <appIcons.DARK_MODE className="text-lg" /> : <></>}
    </Button>
  );
};

export default ThemeButton;
