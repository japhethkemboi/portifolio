"use client";
import Image from "next/image";
import {
  RiHomeFill,
  RiHomeLine,
  RiMailAddFill,
  RiMailAddLine,
  RiSearchFill,
  RiSearchLine,
  RiToolsFill,
  RiToolsLine,
} from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

interface Props {
  activeTab: string;
  setActiveTab: (arg: string) => void;
}

const BottomNav: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex fixed bottom-0 sm:relative sm:justify-start sm:flex-col sm:w-auto sm:h-full sm:border-r sm:pt-4 w-full z-10 justify-evenly gap-6 whitespace-nowrap p-2 bg-gradient-to-t from-white/80 to-white/60">
      <button
        onClick={() => setActiveTab("home")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "home" ? "var(--primary-color)" : ""
        }] `}
      >
        {activeTab == "home" ? (
          <RiHomeFill size={24} />
        ) : (
          <RiHomeLine size={24} />
        )}
        Home
      </button>
      <button
        onClick={() => setActiveTab("search")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "search" ? "var(--primary-color)" : ""
        }] `}
      >
        {activeTab == "search" ? (
          <RiSearchFill size={24} />
        ) : (
          <RiSearchLine size={24} />
        )}
        Search
      </button>
      <button
        onClick={() => setActiveTab("projects")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "projects" ? "var(--primary-color)" : ""
        }] `}
      >
        {activeTab == "projects" ? (
          <RiToolsFill size={24} />
        ) : (
          <RiToolsLine size={24} />
        )}
        Projects
      </button>
      <button
        onClick={() => setActiveTab("contact")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "contact" ? "var(--primary-color)" : ""
        }] `}
      >
        {activeTab == "contact" ? (
          <RiMailAddFill size={24} />
        ) : (
          <RiMailAddLine size={24} />
        )}
        Contact
      </button>
      <button
        onClick={() => setActiveTab("testimonials")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "contact" ? "var(--primary-color)" : ""
        }] `}
      >
        {/* {activeTab == "contact" ? (
          <RiMailAddFill size={24} />
        ) : (
          <RiMailAddLine size={24} />
        )} */}
        <VscFeedback size={24} />
        <span className="text-gray-400">Testimonials</span>
      </button>
      <button
        onClick={() => setActiveTab("about")}
        className={`flex flex-col gap-1 items-center justify-center hover:opacity-60 text-xs text-[${
          activeTab == "about" ? "var(--primary-color)" : ""
        }] `}
      >
        <Image
          src="/images/japhe3.png"
          alt="Japheth Kemboi dark"
          width={24}
          height={24}
          className="rounded-full aspect-square"
        />
        About
      </button>
    </nav>
  );
};

export default BottomNav;
