"use client";
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex gap-2 p-2 rounded-full bg-white/40 hover:bg-black hover:text-[var(--active-link-color)]"
    >
      {isDark ? <BiSun /> : <BiMoon />}
    </button>
  );
};
