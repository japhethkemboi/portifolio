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
        className="flex w-full absolute"
        style={{ backgroundImage: `url(${cbbg.src})` }}
      ></div>
      <div
        className="flex flex-col justify-end px-10 pb-20 w-full bg-center bg-contain bg-no-repeat md:bg-right"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-extrabold">
          <span className="text-4xl lg:text-6xl text-[#FAD02C]">
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
      </div>
    </section>
  );
};

export default Hero;
