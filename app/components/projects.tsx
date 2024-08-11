"use client";
import React, { useEffect, useState } from "react";
import ProjectTile from "./project_tile";
import projects from "./projects.json";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

const Projects = () => {
  const [modalImg, setModalImg] = useState("");
  useEffect(() => {
    modalImg
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalImg]);

  return (
    <>
      <section id="projects" className="flex flex-col p-4 py-14 gap-8 border-t">
        <div className="mt-10">
          <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white">
            Projects
          </h2>
          <p className="mb-4 md:text-lg">Lets shed some light on my work</p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              props={project}
              setModalImage={setModalImg}
            />
          ))}
        </div>
        <div className="flex">
          <a href="/projects" className="text-lg text-blue-500 hover:underline">
            View more of my work
          </a>
        </div>
      </section>
      {modalImg && (
        <div className="fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full min-h-screen bg-gray-950/80 backdrop-blur">
          <div className="relative shrink-0 w-1/2 h-96 overflow-hidden">
            <Image
              src={modalImg}
              alt="alt screenshot"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            onClick={() => setModalImg("")}
            className="right-3 rounded-full bg-white/90 flex gap-2 items-center p-4 border hover:opacity-80 hover:scale-110"
          >
            <CgClose />
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
