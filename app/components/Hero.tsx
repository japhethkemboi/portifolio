import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-7 place-self-center"></div>
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          Hello, I'm Japheth
        </h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl">
          Sample text description
        </p>
      </div>
      <div className="col-span-5"></div>
    </section>
  );
};

export default Hero;
