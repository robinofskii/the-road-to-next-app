"use client";

import { ThemeProvider as BaseThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <BaseThemeProvider attribute={"class"} enableSystem defaultTheme="system">
      {children}
    </BaseThemeProvider>
  );
};
