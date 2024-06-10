import React from "react";
import bg from "../../public/images/japhe3.png";
import { Typewriter } from "nextjs-simple-typewriter";
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareUpwork,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-screen relative bg-black overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="flex flex-col justify-end p-10 w-full bg-center bg-contain bg-no-repeat md:bg-right"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <h1 className="text-white mb-4 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-extrabold">
          <span className="sm:text-4xl lg:text-6xl text-[#FAD02C]">
            Hello, I&apos;m
          </span>
          <br />
          <Typewriter
            words={["Japheth Kemboi", "Full Stack Developer"]}
            cursor
            loop={5}
            cursorStyle="_"
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          I develop web and mobile apps.
        </p>
        <div className="flex gap-3">
          <button className="p-3 md:px-6 bg-white font-bold hover:bg-slate-200 text-black">
            Hire Me
          </button>
          <button className="md:px-6 p-3 bg-transparent font-bold hover:bg-slate-800 text-white border border-white">
            Download Resume
          </button>
        </div>
        <div className="flex w-full space-x-4 text-white mt-8 md:text-xl">
          <a target="_blank" href="https://github.com/TheeAnon">
            <FaSquareGithub size={30} />
          </a>
          <a target="_blank" href="https://x.com/japhe_ke_">
            <FaSquareXTwitter size={30} />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/japheth-kemboi-879a48271"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            target="_blank"
            href="https://upwork.com/freelancers/~01ba600a501ec65914"
          >
            <FaSquareUpwork size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
