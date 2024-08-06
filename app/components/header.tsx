"use client";
import { BiSearch } from "react-icons/bi";
import { CgClose, CgSearch } from "react-icons/cg";
import { ToggleTheme } from "./theme";
import { RiCloseFill, RiMenu5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    isNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isNavOpen]);

  return (
    <>
      <header className="fixed dark:text-gray-800 flex w-full z-10 justify-between whitespace-nowrap sm:p-4 p-2 text-[var(--link-color)] text-xs sm:text-sm md:text-base lg:text-lg backdrop-blur bg-white/80 border-b">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 text-lg sm:hidden"
        >
          {isNavOpen ? <RiCloseFill /> : <RiMenu5Fill />}
        </button>

        <div className="hidden sm:flex gap-2 md:gap-4 text-[var(--link-color)] dark:text-gray-800 items-center">
          <a
            href="#home"
            className="border-b-4 border-[var(--link-hover-color)] p-1 px-3 text-[var(--primary-color)] font-bold"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--link-hover-color)] dark:hover:text-[var(--link-hover-color)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--link-hover-color)] dark:hover:text-[var(--link-hover-color)]"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--link-hover-color)] dark:hover:text-[var(--link-hover-color)]"
          >
            Resume
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <ToggleTheme />
          <button className="p-2 lg:hidden rounded-full font-bold lg:text-xl bg-white/40 hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]">
            <BiSearch />
          </button>
          <div className="px-4 hidden rounded-full lg:flex border items-center">
            <CgSearch />
            <input
              className="grow bg-transparent p-2 items-center focus:outline-none"
              placeholder="Search"
            />
            <button className="hidden">
              <CgClose />
            </button>
          </div>
          <a
            href="mailto:japhethkemboi69@gmail.com"
            className="p-2 px-3 text-white bg-[var(--primary-color)] rounded-full hover:opacity-70"
          >
            Hire Me
          </a>
        </div>
      </header>
      {isNavOpen && (
        <div className="fixed z-40 flex flex-col top-0 bottom-0 w-full bg-white/30 dark:bg-black/30">
          <div className="flex flex-col justify-center text-[var(--link-color)] gap-4 min-h-screen overflow-hidden w-3/4 backdrop-blur-lg bg-white/80 dark:bg-black/80 dark:text-white/60 p-4">
            <button
              onClick={() => setIsNavOpen(false)}
              className="flex gap-2 text-[var(--primary-color)] rounded dark:text-white/70 hover:text-white p-2 hover:bg-[var(--primary-color)] border border-[var(--primary-color)] dark:border-white/40 items-center"
            >
              <TfiClose />
              Close
            </button>
            <a
              href="#home"
              className="bg-[var(--link-hover-color)] text-white rounded p-2 px-3"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:bg-[var(--primary-color)] rounded hover:text-white dark:hover:text-white/80 p-2 px-3"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:bg-[var(--primary-color)] rounded hover:text-white dark:hover:text-white/80 p-2 px-3"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="hover:bg-[var(--primary-color)] rounded hover:text-white dark:hover:text-white/80 p-2 px-3"
            >
              Download resume
            </a>
          </div>
          <div
            className="absolute w-1/4 right-0 top-0 bottom-0"
            onClick={() => setIsNavOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
