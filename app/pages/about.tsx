"use client";
import React from "react";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-evenly">
      <div
        style={{
          backgroundImage: `url('/images/japhe.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="flex flex-col gap-10 w-full h-full p-4"
      >
        <div className="flex flex-col gap-4 justify-center h-full">
          <h1 className="text-white font-extrabold text-[120px]">
            Visionaries Don&apos;t Follow the Rules—they Make Them.
          </h1>
          <p>Dive into ideas that redefine the status quo.</p>
          <Link
            to="/code4code"
            className="text-[#012C37] mr-auto bg-white font-bold rounded-xl hover:scale-95 p-4"
          >
            See the Future I’m Building
          </Link>
        </div>
        <div className="flex gap-4 w-full mt-auto justify-end items-center">
          <p className="text-white/80 font-bold text-2xl mr-auto">
            Software Engineer
          </p>
          <a
            target="_blank"
            href="mailto:japheth.kemboi@code4code.dev"
            className="p-4 flex rounded-xl text-white hover:scale-95 gap-2 px-4 items-center bg-[var(--primary-color)]"
          >
            <IoMdMail size={24} />
            Reach out
          </a>
          <div className="flex gap-4 items-center self-center lg:self-start">
            <a
              target="_blank"
              href="https://github.com/japhethkemboi"
              className="p-4 rounded-xl bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <FaGithub size={24} />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/japheth-kemboi-879a48271"
              className="p-4 rounded-xl bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href="https://upwork.com/freelancers/~01ba600a501ec65914"
              className="p-4 rounded-xl bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <FaUpwork size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
