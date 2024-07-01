"use client";
import Image from "next/image";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
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
  isStatusUp: boolean;
  setIsStatusUp: Dispatch<SetStateAction<boolean>>;
}

const Status: React.FC<StatusProps> = ({ isStatusUp, setIsStatusUp }) => {
  const [isCommentsUp, setIsCommentsUp] = useState(false);

  useEffect(() => {
    isStatusUp
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isStatusUp]);

  return (
    <div className="absolute overscroll-none z-20 flex w-full items-center sm:py-10 top-0 h-[(100vh-80px)] sm:h-screen bg-white/30 justify-center">
      <div className="flex sm:max-w-lg py-4 self-center h-screen sm:h-full pb-20 flex-col items-center w-full bg-white/60 backdrop-blur sm:rounded sm:p-4">
        <div className="absolute z-30 flex w-full backdrop-blur bg-white/40 pb-2">
          <div className="flex gap-4 items-center">
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
        <div className="grow flex mt-2 items-center">
          <Carousel
            showStatus={false}
            dynamicHeight={true}
            useKeyboardArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
          >
            <Image
              src="/images/japhe3.png"
              alt="Japheth Kemboi Full stack developer"
              width={400}
              height={400}
              className="object-contain w-full h-auto self-center"
            />
            <Image
              src="/images/japhe.png"
              alt="Japheth Kemboi Full stack developer"
              width={400}
              height={400}
              className="object-contain w-full h-auto self-center"
            />
            <Image
              src="/images/6641db24636318efa3c9d15b95b6f662.jpg"
              alt="Japheth Kemboi Full stack developer"
              width={400}
              height={400}
              className="object-contain w-full h-auto self-center"
            />
          </Carousel>
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
          </div>
        )}
        <div className="absolute backdrop-blur bg-white/40 z-30 bottom-20 sm:bottom-2 flex gap-4 mt-auto justify-center p-2 items-center text-2xl w-full text-black/90">
          <div className="flex gap-2 grow items-center relative">
            <input
              className="w-full rounded-full text-base p-2 px-6 h-14 bg-white/40 focus:outline-none focus:border-black border"
              placeholder="Leave a comment"
            />
            <button className="p-2 rounded-full bg-white/60 absolute right-2 hover:bg-[var(--primary-color)] hover:text-white">
              <BiSolidSend />
            </button>
          </div>
          <button
            onClick={() => setIsCommentsUp(!isCommentsUp)}
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
      </div>
    </div>
  );
};

export default Status;
