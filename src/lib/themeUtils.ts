// src/utils/themeUtils.ts
import logoBrown from "@/assets/logo_brown.svg";
import logoMilky from "@/assets/logo_milky.svg";

export const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const toggleTheme = (
  currentTheme: string,
  setTheme: (theme: string) => void
) => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
};

export const getLogoByTheme = (theme: string) => {
  return theme === "dark" ? logoMilky : logoBrown;
};
