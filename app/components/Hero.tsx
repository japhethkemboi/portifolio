import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-[#F5F5DC]">
              Hello, I'm
            </span>
            Japheth
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
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] place-self-center mt-4 lg:mt-0 w-[250px] h-[250px] lg:w-400 lg:h-400 relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2"
              src="/../japhe.jpg"
              alt="Japheth Kemboi"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
