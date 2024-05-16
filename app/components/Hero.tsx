import React from "react";
import bg from "../../public/images/japhe3.png";
import cbbg from "../../public/images/cbimg.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="flex h-screen bg-cover md:bg-right-bottom md:bg-contain md:bg-no-repeat bg-black"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        className="absolute w-full h-full opacity-20 bg-cover bg-black"
        style={{ backgroundImage: `url(${cbbg.src})` }}
      ></div>
      <div className="flex z-10 flex-col px-10 place-self-end pb-20">
        <h1 className="text-white mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold">
          <span className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-[#F5F5DC]">
            Hello, I&apos;m
          </span>
          <br />
          Japheth Kemboi
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6"></p>
        <div>
          <button className="px-6 py-3 bg-white sm:w-fit hover:bg-slate-200 text-black bg-">
            Hire Me
          </button>
          <button className="px-6 py-3 bg-transparent sm:w-fit hover:bg-slate-800 text-white border border-white ml-3">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
