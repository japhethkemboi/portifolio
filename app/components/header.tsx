"use client";
import { BiSearch } from "react-icons/bi";
import { CgClose, CgSearch } from "react-icons/cg";
import { ToggleTheme } from "./theme";
import { RiCloseCircleFill, RiCloseFill, RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed overscroll-none flex w-full border-b z-10 justify-between whitespace-nowrap p-4 xs:p-2 text-[var(--link-color)] xs:text-xs text-sm md:text-base">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 text-lg sm:hidden"
        >
          {isNavOpen ? <RiCloseFill /> : <RiMenu5Fill />}
        </button>

        <div className="hidden sm:flex gap-2 md:gap-4 text-[var(--link-color)] items-center">
          <a
            href="#home"
            className="bg-[var(--link-hover-color)] text-white p-2 px-3 rounded-full"
          >
            Home
          </a>
          <a href="#projects" className="hover:text-[var(--link-hover-color)]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[var(--link-hover-color)]">
            Contact
          </a>
          <a href="#contact" className="hover:text-[var(--link-hover-color)]">
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
          <button className="p-2 px-3 text-white bg-[var(--primary-color)] rounded-full hover:bg-white/60 hover:text-[var(--primary-color)]">
            Hire Me
          </button>
        </div>
      </header>
      {isNavOpen && (
        <div className="absolute z-10 flex flex-col top-0 bottom-0 overflow-hidden w-full bg-white/30">
          <div className="flex flex-col justify-center text-[var(--link-color)] gap-4 min-h-screen overflow-hidden w-3/4 backdrop-blur-lg bg-white/80 p-4">
            <button
              onClick={() => setIsNavOpen(false)}
              className="flex gap-2 text-[var(--primary-color)] hover:text-white p-2 hover:bg-[var(--primary-color)] border-2 border-[var(--primary-color)] items-center"
            >
              <RiCloseCircleFill />
              Close
            </button>
            <a
              href="#home"
              className="bg-[var(--link-hover-color)] text-white p-2 px-3 hover:bg-white/60 hover:text-[var(--primary-color)]"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:bg-white/60 hover:text-[var(--primary-color)] p-2 px-3"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:bg-white/60 hover:text-[var(--primary-color)] p-2 px-3"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="hover:bg-white/60 hover:text-[var(--primary-color)] p-2 px-3"
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
