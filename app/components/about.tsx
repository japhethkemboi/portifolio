import React from "react";
import cbbg from "../../public/images/cbimg.jpg";
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandReactNative,
} from "react-icons/tb";
import { BiLogoDjango } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiPhp } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col h-screen space-y-5 text-white px-5 py-14 bg-black relative overflow-hidden snap-start"
    >
      <div>
        <h2 className="bg-blue-800 mb-4 text-5xl sm:text-6xl md:text-7xl font-extrabold">
          My Tools
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 border border-white backdrop-blur p-4">
        <div>
          <h3 className="my-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-md">
            Front-End
          </h3>
          <ul className="text-lg">
            <li className="flex items-center gap-2">
              <IoLogoJavascript /> Javascript
            </li>
            <li className="flex items-center gap-2">
              <RiReactjsFill /> React js
            </li>
            <li className="flex items-center gap-2">
              <RiNextjsFill /> Next js
            </li>
            <li className="flex items-center gap-2">
              <TbBrandReactNative /> React Native
            </li>
            <li className="flex items-center gap-2">
              <RiTailwindCssFill /> TailwindCSS
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-md">
            Back-End
          </h3>
          <ul className="text-lg">
            <li className="flex items-center gap-2">
              <IoLogoPython /> Python
            </li>
            <li className="flex items-center gap-2">
              <BiLogoDjango /> Django
            </li>
            <li className="flex items-center gap-2">
              <IoLogoNodejs /> Node js
            </li>
            <li className="flex items-center gap-2">
              <TbBrandMysql /> MySql
            </li>
            <li className="flex items-center gap-2">
              <TbBrandMongodb /> MongoDB
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Others
          </h3>
          <ul className="text-lg">
            <li className="flex items-center gap-2">
              <SiPhp /> PHP
            </li>
            <li className="flex items-center gap-2">
              <BsGithub /> Git & Github
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap border border-white backdrop-blur p-4 text-xl justify-center">
        <IoLogoJavascript />
        <RiReactjsFill />
        <RiNextjsFill />
        <TbBrandReactNative />
        <RiTailwindCssFill />
        <IoLogoPython />
        <BiLogoDjango />
        <IoLogoNodejs />
        <TbBrandMysql />
        <TbBrandMongodb />
        <SiPhp />
        <BsGithub />
      </div>
    </section>
  );
};

export default About;
