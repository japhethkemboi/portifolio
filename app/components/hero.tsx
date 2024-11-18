"use client";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-evenly">
      <div
        style={{
          backgroundImage: `url('/bg2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="flex flex-col gap-10 w-full h-full"
      >
        <div className="flex flex-col gap-8 bg-white/50 backdrop-blur justify-center h-full p-4">
          <h1 className="text-[#012C37] font-extrabold text-[120px]">
            Visionaries Don&apos;t Follow the Rules—they Make Them.
          </h1>
          <p className="font-extralight text-3xl text-white">
            Dive into ideas that redefine the status quo.
          </p>
          <Link
            to="/code4code"
            className="text-[#012C37] mr-auto bg-white font-bold rounded-xl hover:scale-95 p-4"
          >
            See the Future I’m Building
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
