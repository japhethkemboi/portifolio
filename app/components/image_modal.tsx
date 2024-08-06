import Image from "next/image";
import React from "react";

const hexToRgba = (hex: string, opacity: number) => {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((hex) => hex + hex)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

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
}

const ProjectTile: React.FC<Props> = ({ props }) => {
  return (
    <div
      className="flex flex-col rounded-lg p-2 border text-xs lg:text-sm gap-4"
      style={{ backgroundColor: props.theme.bg }}
    >
      <h1
        style={{ color: props.theme.primary }}
        className="font-bold text-lg lg:text-xl md:block hidded"
      >
        {props.title}
      </h1>
      <p
        style={{ color: props.theme.text }}
        className="text-gray-600 text-ellipsis line-clamp-3"
      >
        {props.desc}
      </p>
      <div className="relative shrink-0 w-14 h-14 overflow-hidden border hover:scale-125 hover:opacity-70">
        <Image
          src={image}
          alt={`${props.title} screenshot`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
