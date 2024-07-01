"use client";
import { BiSearch } from "react-icons/bi";
import { CgClose, CgSearch } from "react-icons/cg";
import { ToggleTheme } from "./theme";
import { RiCloseCircleFill, RiCloseFill, RiMenu5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const classes = {
    navButton:
      "hover:bg-white/60 hover:text-[var(--primary-color)] dark:hover:text-white/80 p-2 px-3",
    activeNavButton:
      "bg-[var(--link-hover-color)] text-white/80 p-2 px-3 hover:bg-white/60 hover:text-[var(--primary-color)] dark:hover:text-black",
    headerButton:
      "hover:text-[var(--link-hover-color)] dark:hover:text-[var(--link-hover-color)] dark:text-white/60",
    activeHeaderButton:
      "bg-[var(--link-hover-color)] text-white p-2 px-3 rounded-full",
  };

  useEffect(() => {
    isNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isNavOpen]);

  return (
    <>
      <header className="fixed dark:text-white flex w-full border-b dark:border-white/20 z-10 justify-between whitespace-nowrap p-4 xs:p-2 text-[var(--link-color)] text-xs sm:text-sm md:text-base">
        <button
          onClick={() => setIsNavOpen(true)}
          className="p-2 text-lg sm:hidden"
        >
          {isNavOpen ? <RiCloseFill /> : <RiMenu5Fill />}
        </button>

        <div className="hidden sm:flex gap-2 md:gap-4 text-[var(--link-color)] items-center">
          <a href="#home" className={classes.activeHeaderButton}>
            Home
          </a>
          <a href="#projects" className={classes.headerButton}>
            Projects
          </a>
          <a href="#contact" className={classes.headerButton}>
            Contact
          </a>
          <a href="#contact" className={classes.headerButton}>
            Resume
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <ToggleTheme />
          <button className="p-2 lg:hidden rounded-full bg-white/40 hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]">
            <BiSearch />
          </button>
          <div className="px-4 hidden rounded-full lg:flex bg-white/40 items-center">
            <CgSearch />
            <input
              className="grow bg-transparent p-2 items-center focus:outline-none"
              placeholder="Search"
            />
            <button>
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
        <div className="absolute z-10 flex flex-col top-0 bottom-0 overflow-hidden w-full bg-white/30 dark:bg-black/30">
          <div className="flex flex-col justify-center text-[var(--link-color)] gap-4 min-h-screen overflow-hidden w-3/4 backdrop-blur-lg bg-white/80 dark:bg-black/80 dark:text-white/60 p-4">
            <button
              onClick={() => setIsNavOpen(false)}
              className="flex gap-2 text-[var(--primary-color)] dark:text-white/70 hover:text-white p-2 hover:bg-[var(--primary-color)] border-2 border-[var(--primary-color)] dark:border-white/40 items-center"
            >
              <RiCloseCircleFill />
              Close
            </button>
            <a href="#home" className={classes.activeNavButton}>
              Home
            </a>
            <a href="#projects" className={classes.navButton}>
              Projects
            </a>
            <a href="#contact" className={classes.navButton}>
              Contact
            </a>
            <a href="#contact" className={classes.navButton}>
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
