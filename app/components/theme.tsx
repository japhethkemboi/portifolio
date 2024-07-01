import React from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme == "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex gap-2 p-2 rounded-full bg-black/70 text-white dark:text-black dark:bg-white/80 hover:bg-black hover:text-[var(--active-link-color)] dark:hover:text-black dark:hover:bg-white"
    >
      {isDark ? <BiSun /> : <BiMoon />}
    </button>
  );
};
