import React from "react";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";

const About = () => {
  return (
    <section className="flex flex-col h-screen space-y-5 text-white px-10 py-10 bg-black">
      <div>
        <h2 className="bg-blue-800 mb-4 text-5xl sm:text-6xl md:text-7xl font-extrabold">
          My Tools
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-md">
            Front-End
          </h3>
          <ul>
            <li className="text-green-400">Javascript</li>
            <li>Next js</li>
            <li>React library</li>
            <li>Tailwind css</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Back-End
          </h3>
          <ul>
            <li className="text-green-400">Javascript</li>
            <li>Node js</li>
            <li>Express js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Mobile dev
          </h3>
          <ul>
            <li className="text-green-400">Javascript</li>
            <li>React Native</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Version control
          </h3>
          <ul>
            <a href="https://github.com/TheeAnon">
              <li>Git & Github</li>
            </a>
          </ul>
        </div>
        <div>
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Familiar with
          </h3>
          <ul>
            <li>Python & Django</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="sm:flex flex-col hidden">
          <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Connect
          </h3>
          <div className="flex w-full space-x-4">
            <a target="_blank" href="https://github.com/TheeAnon">
              <FaSquareGithub size={24} />
            </a>
            <a target="_blank" href="https://x.com/japhe_ke_">
              <FaSquareXTwitter size={24} />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/japheth-kemboi-879a48271"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href="https://upwork.com/freelancers/~01ba600a501ec65914"
            >
              <FaSquareUpwork size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden mt-auto">
        <h3 className="my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Connect
        </h3>
        <div className="flex w-full space-x-4">
          <a target="_blank" href="https://github.com/TheeAnon">
            <FaSquareGithub size={24} />
          </a>
          <a target="_blank" href="https://x.com/japhe_ke_">
            <FaSquareXTwitter size={24} />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/japheth-kemboi-879a48271"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            target="_blank"
            href="https://upwork.com/freelancers/~01ba600a501ec65914"
          >
            <FaSquareUpwork size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
