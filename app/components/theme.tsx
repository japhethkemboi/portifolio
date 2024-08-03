import React from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme == "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex gap-2 p-2 text-black dark:hover:text-black border lg:text-xl rounded-full hover:opacity-70 hover:bg-gray-800 hover:text-white dark:hover:bg-white/60"
    >
      {isDark ? <BiSun /> : <BiMoon />}
    </button>
  );
};
