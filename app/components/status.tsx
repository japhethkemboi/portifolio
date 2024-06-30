"use client";
import Image from "next/image";
import React, { useState, Dispatch, SetStateAction } from "react";
import {
  BiChevronLeft,
  BiComment,
  BiHeart,
  BiSolidComment,
  BiSolidHeart,
  BiSolidSend,
} from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profileDark from "../../public/images/japhe3.png";

interface StatusProps {
  setIsStatusUp: Dispatch<SetStateAction<boolean>>;
}

const Status: React.FC<StatusProps> = ({ setIsStatusUp }) => {
  const [isCommentsUp, setIsCommentsUp] = useState(false);

  return (
    <div className="absolute overscroll-none z-20 flex flex-col items-center py-4 pb-20 top-0 h-screen w-full bg-white/80 backdrop-blur">
      <div className="flex w-full">
        <div className="flex gap-4 items-center ">
          <button
            onClick={() => setIsStatusUp(false)}
            className="flex items-center hover:opacity-50"
          >
            <BiChevronLeft size={40} />
            <Image
              src={profileDark}
              alt="Japheth Kemboi dark"
              width={50}
              height={50}
              className="rounded-full aspect-square"
            />
          </button>
          <h2 className="font-bold">Japheth Kemboi</h2>
        </div>
      </div>
      <div className="flex grow shrink mt-2">
        <Carousel showStatus={false}>
          <Image
            src="/images/japhe3.png"
            alt="Japheth Kemboi Full stack developer"
            width={400}
            height={400}
            className="max-w-none"
          />
          <Image
            src="/images/japhe3.png"
            alt="Japheth Kemboi Full stack developer"
            width={400}
            height={400}
            className="max-w-none"
          />
        </Carousel>
      </div>
      <div className="absolute bottom-0 flex gap-4 mb-2 bg-white/40 justify-center p-2 items-center text-3xl w-full text-black/90">
        <div className="flex gap-2 grow items-center relative">
          <input
            className="w-full rounded-full text-base p-2 px-6 h-14 bg-white/40 focus:outline-none focus:border-black border"
            placeholder="Leave a comment"
          />
          <button className="p-2 rounded-full bg-white/60 absolute right-1 hover:bg-[var(--primary-color)] hover:text-white">
            <BiSolidSend />
          </button>
        </div>
        <button
          onClick={() => setIsCommentsUp(true)}
          className="flex flex-col justify-center items-center hover:opacity-40"
        >
          <BiComment />
          {/* <BiSolidComment /> */}
          <span className="text-sm">20</span>
        </button>
        <button className="flex flex-col justify-center items-center">
          <button className="hover:opacity-40">
            <BiHeart />
            {/* <BiSolidHeart /> */}
          </button>
          <span className="text-sm">100</span>
        </button>
      </div>
      {isCommentsUp && (
        <div className="absolute ease-in-out w-full bottom-0 z-30 flex flex-col backdrop-blur-lg bg-white/80 h-3/4 rounded-t-lg">
          <button
            onClick={() => setIsCommentsUp(false)}
            className="flex items-center font-bold text-xl my-4 hover:opacity-50"
          >
            <BiChevronLeft size={30} />
            Comments
          </button>
          <div className="flex flex-col gap-2 grow p-2">
            <p className="w-full">Comment 1</p>
            <p className="w-full">Comment 2</p>
          </div>
          <div className="flex gap-2 mb-2 p-4 items-center relative backdrop-blur-sm">
            <input
              className="w-full rounded-full text-base p-2 px-6 h-14 bg-white/40 border focus:outline-none focus:border-black"
              placeholder="Leave a comment"
            />
            <button className="p-2 rounded-full bg-white/60 absolute right-5 hover:bg-[var(--primary-color)] hover:text-white">
              <BiSolidSend size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;