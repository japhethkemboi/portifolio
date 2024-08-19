import Image from "next/image";
import React from "react";

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
  setModalImage: void;
}

const ProjectTile: React.FC<Props> = ({ props, setModalImage }) => {
  return (
    <div className="flex rounded-lg flex-col w-full p-2 text-xs lg:text-sm gap-4 border bg-[#1fc7519d]">
      <h1 className="font-bold text-lg lg:text-xl md:block hidded">
        {props.title}
      </h1>
      <p className="text-gray-600 text-ellipsis line-clamp-3">{props.desc}</p>
      <div className="flex gap-2 overflow-hidden">
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
    </div>
  );
};

export default ProjectTile;