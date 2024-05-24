import React from "react";
import bg from "../../public/images/japhe3.png";
import cbbg from "../../public/images/cbimg.jpg";
import { Typewriter } from "nextjs-simple-typewriter";

const Hero = () => {
  return (
    <section
      className="flex h-screen relative bg-black overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${cbbg.src})`, zIndex: -1 }}
      ></div>
      <div
        className="flex flex-col justify-end px-10 pb-20"
        style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}
      >
        <h1 className="text-white mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold">
          <span className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-[#F5F5DC]">
            Hello, I&apos;m
          </span>
          <br />
          <Typewriter
            words={["Japheth Kemboi", "Full Stack Developer"]}
            cursor
            loop={true}
            cursorStyle="_"
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          I develop web and mobile apps.
        </p>
        <div className="space-x-3">
          <button className="px-6 py-3 bg-white hover:bg-slate-200 text-black">
            Hire Me
          </button>
          <button className="px-6 py-3 bg-transparent hover:bg-slate-800 text-white border border-white">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
