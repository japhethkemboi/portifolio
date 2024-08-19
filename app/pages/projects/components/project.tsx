"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { RiArrowLeftLine } from "react-icons/ri";

interface Theme {
  primary: string;
  secondary: string;
  text: string;
  bg: string;
}

interface Project {
  title: string;
  desc: string;
  images: string[];
  tags: string[];
  theme: Theme;
}

interface Props {
  props: Project;
  setModalImage: (arg: string) => void;
}

const Project: React.FC<Props> = ({ props, setModalImage }) => {
  const [modalImg, setModalImg] = useState("");
  useEffect(() => {
    modalImg
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalImg]);

  return (
    <>
      <section className="flex flex-col p-4 gap-8">
        <div>
          <button className="rounded-full p-2 border hover:bg-gray-100 hover:scale-110">
            <RiArrowLeftLine size={30} />
          </button>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white">
          BurghExpress
        </h2>
        <p>Desc</p>
        <div className="flex gap-2 flex-wrap">
          {props.images.map((image, index) => (
            <button
              onClick={() => setModalImage(image)}
              key={index}
              className="relative shrink-0 w-14 h-14 rounded overflow-hidden hover:scale-125 hover:opacity-70"
            >
              <Image
                src={image}
                alt={`${props.title} screenshot`}
                layout="fill"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap mt-auto">
          {props.tags.map((tag, index) => (
            <a
              href={tag}
              key={index}
              className="p-1 text-gray-400 text-xs whitespace-nowrap hover:underline"
            >
              #{tag}
            </a>
          ))}
        </div>
      </section>
      {modalImg && (
        <div className="fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full min-h-screen bg-gray-950/80 backdrop-blur">
          <div className="relative shrink-0 w-full h-3/4 overflow-hidden">
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

export default Project;
