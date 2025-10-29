"use client";

import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";

import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button size="icon" variant="outline" onClick={switchTheme}>
      {theme === "light" ? <LucideMoon /> : <LucideSun />}
    </Button>
  );
};

export default ThemeSwitcher;
