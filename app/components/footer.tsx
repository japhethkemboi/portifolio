import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaUpwork, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center p-8 text-sm xs:text-xs lg:text-base">
      <div className="flex flex-col justify-center gap-4 md:justify-between md:flex-row w-full p-4 rounded-lg bg-white/60 items-center">
        <span className="">Copyright 2024</span>
        <div className="flex gap-4 text-[var(--link-color)] items-center justify-center font-semibold">
          <a href="#home" className="hover:text-[var(--link-hover-color)]">
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
        <div className="flex space-x-4 items-center">
          <a
            target="_blank"
            href="https://github.com/TheeAnon"
            className="p-2 rounded-full bg-white/80 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://x.com/japhe_ke_"
            className="p-2 rounded-full bg-white/80 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
          >
            <FaXTwitter />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/japheth-kemboi-879a48271"
            className="p-2 rounded-full bg-white/80 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
          >
            <CiLinkedin />
          </a>
          <a
            target="_blank"
            href="https://upwork.com/freelancers/~01ba600a501ec65914"
            className="p-2 rounded-full bg-white/80 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
          >
            <FaUpwork />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
