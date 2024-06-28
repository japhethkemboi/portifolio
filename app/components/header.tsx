import { BiSearch } from "react-icons/bi";
import { CgClose, CgSearch } from "react-icons/cg";
import { ToggleTheme } from "./theme";

const Header = () => {
  return (
    <header className="fixed flex w-full backdrop-blur-lg border-b z-10 justify-between whitespace-nowrap p-4 xs:p-2 text-[var(--link-color)] xs:text-xs text-sm md:text-base">
      <div className="flex gap-2 md:gap-4 text-[var(--link-color)] items-center">
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
        <button className="p-2 px-3 text-white bg-[var(--primary-color)] font-semibold rounded-full hover:bg-white/60 hover:text-[var(--primary-color)]">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;
