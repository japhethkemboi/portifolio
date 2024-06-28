import React from "react";
import profileDark from "../../public/images/japhe3.png";
import { FaGithub, FaUpwork, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiCsharp,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen gap-8 w-full flex flex-col items-center mt-14 justify-evenly">
      <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-4 p-4 relative w-full flex flex-col items-center">
        <div className="flex flex-col gap-10 rounded-lg p-4 w-full items-center lg:items-start">
          <div className="flex gap-4 rounded-lg items-center w-auto">
            <div className="">
              <Image
                src={profileDark}
                alt="Japheth Kemboi dark"
                width={150}
                height={150}
                className="rounded-full aspect-square"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="flex items-center font-extrabold gap-2 xs:text-lg text-xl sm:text-2xl md:text-3xl lg:text-5xl ease-in">
                Japheth Kemboi
                <MdVerified color="white" fill="blue" />
              </h1>
              <h2 className="text-black/80 sm:text-lg md:text-xl">
                Full stack developer
              </h2>
              <p className="text-[var(--text-color)] xs:text-xs text-sm sm:text-base">
                I develop web and mobile apps.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-[var(--text-color)] xs:text-sm items-center md:text-xl self-center lg:self-start">
            <a
              target="_blank"
              href="mailto:japhethkemboi69@gmail.com"
              className="p-2 rounded-full text-white hover:text-black hover:bg-white/60 flex gap-2 px-4 items-center xs:text-sm bg-[var(--primary-color)]"
            >
              <IoMdMail />
              Contact
            </a>
            <a
              target="_blank"
              href="https://github.com/TheeAnon"
              className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://x.com/japhe_ke_"
              className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <FaXTwitter />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/japheth-kemboi-879a48271"
              className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <CiLinkedin />
            </a>
            <a
              target="_blank"
              href="https://upwork.com/freelancers/~01ba600a501ec65914"
              className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
            >
              <FaUpwork />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full justify-evenly p-4 rounded text-sm xs:text-xs md:text-base">
          <h2 className="flex self-center font-bold gap-2 xs:text-xl text-2xl md:text-3xl lg:text-4xl ease-in">
            Tech stack
          </h2>
          <div className="flex gap-8 p-4 items-end flex-wrap justify-evenly">
            <div className="flex flex-col gap-4 rounded-lg p-4 bg-white/40">
              <h3 className="xs:text-base text-lg md:text-xl lg:text-2xl font-bold max-w-md">
                Languages
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <SiJavascript /> Javascript
                </li>
                <li className="flex items-center gap-4">
                  <SiPython /> Python
                </li>
                <li className="flex items-center gap-4">
                  <SiCsharp /> C#
                </li>
                <li className="flex items-center gap-4">
                  <SiPhp /> PHP
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-4 bg-white/40">
              <h3 className="xs:text-base text-lg md:text-xl lg:text-2xl font-bold max-w-md">
                Front-End
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <SiReact /> React js
                </li>
                <li className="flex items-center gap-4">
                  <SiNextdotjs /> Next js
                </li>
                <li className="flex items-center gap-4">
                  <TbBrandReactNative /> React Native
                </li>
                <li className="flex items-center gap-4">
                  <SiTailwindcss /> TailwindCSS
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-4 bg-white/40">
              <h3 className="xs:text-base text-lg md:text-xl lg:text-2xl font-bold max-w-md">
                Back-End
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <SiDjango /> Django
                </li>
                <li className="flex items-center gap-4">
                  <SiNodedotjs /> Node js
                </li>
                <li className="flex items-center gap-4">
                  <SiMysql /> MySQL
                </li>
                <li className="flex items-center gap-4">
                  <SiMongodb /> MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white/40 p-4 w-full inline-flex gap-8 flex-nowrap whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] xs:text-sm text-sm md:text-base">
        <div className="flex gap-8 animate-marquee">
          <li className="flex items-center gap-2">Dandia</li>
          <li className="flex items-center gap-2">BurghExpress</li>
          <li className="flex items-center gap-2">Priority 1 Radio</li>
          <li className="flex items-center gap-2">The Northern Market</li>
          <li className="flex items-center gap-2">RentWise</li>
          <li className="flex items-center gap-2">Primermovies</li>
          <li className="flex items-center gap-2">Mopp.pl</li>
          <li className="flex items-center gap-2">
            <SiJavascript /> Javascript
          </li>
          <li className="flex items-center gap-2">
            <SiPython /> Python
          </li>
          <li className="flex items-center gap-2">
            <SiCsharp /> C#
          </li>
          <li className="flex items-center gap-2">
            <SiPhp /> PHP
          </li>
          <li className="flex items-center gap-2">
            <SiReact /> React js
          </li>
          <li className="flex items-center gap-2">
            <SiNextdotjs /> Next js
          </li>
          <li className="flex items-center gap-2">
            <TbBrandReactNative /> React Native
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss /> TailwindCSS
          </li>
          <li className="flex items-center gap-2">
            <SiDjango /> Django
          </li>
          <li className="flex items-center gap-2">
            <SiNodedotjs /> Node js
          </li>
          <li className="flex items-center gap-2">
            <SiMysql /> MySQL
          </li>
          <li className="flex items-center gap-2">
            <SiMongodb /> MongoDB
          </li>
        </div>
        <div className="flex gap-8 animate-marquee2 absolute">
          <li className="flex items-center gap-2">Dandia</li>
          <li className="flex items-center gap-2">BurghExpress</li>
          <li className="flex items-center gap-2">Priority 1 Radio</li>
          <li className="flex items-center gap-2">The Northern Market</li>
          <li className="flex items-center gap-2">RentWise</li>
          <li className="flex items-center gap-2">Primermovies</li>
          <li className="flex items-center gap-2">Mopp.pl</li>
          <li className="flex items-center gap-2">
            <SiJavascript /> Javascript
          </li>
          <li className="flex items-center gap-2">
            <SiPython /> Python
          </li>
          <li className="flex items-center gap-2">
            <SiCsharp /> C#
          </li>
          <li className="flex items-center gap-2">
            <SiPhp /> PHP
          </li>
          <li className="flex items-center gap-2">
            <SiReact /> React js
          </li>
          <li className="flex items-center gap-2">
            <SiNextdotjs /> Next js
          </li>
          <li className="flex items-center gap-2">
            <TbBrandReactNative /> React Native
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss /> TailwindCSS
          </li>
          <li className="flex items-center gap-2">
            <SiDjango /> Django
          </li>
          <li className="flex items-center gap-2">
            <SiNodedotjs /> Node js
          </li>
          <li className="flex items-center gap-2">
            <SiMysql /> MySQL
          </li>
          <li className="flex items-center gap-2">
            <SiMongodb /> MongoDB
          </li>
        </div>
      </div>
    </section>
  );
};

export default Hero;
