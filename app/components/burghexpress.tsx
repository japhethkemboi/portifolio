import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import bg from "../../public/images/burghexpress/1.png";
import bg1 from "../../public/images/burghexpress/2.png";
import bg2 from "../../public/images/burghexpress/3.png";
import bg3 from "../../public/images/burghexpress/4.png";
import bg4 from "../../public/images/burghexpress/5.png";
import bg5 from "../../public/images/burghexpress/6.png";
import bg6 from "../../public/images/burghexpress/7.png";
import bg7 from "../../public/images/burghexpress/8.png";
import {
  SiDjango,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiUpwork,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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

const BurgExpress = () => {
  return (
    <div
      className="flex w-full bg-center rounded-lg bg-no-repeat"
      style={{
        backgroundImage: `url("/images/burghexpress/logo.png")`,
        backgroundColor: hexToRgba("#fc0000", 0.3),
      }}
    >
      <div
        className="flex flex-col gap-4 w-full rounded-lg p-4 backdrop-blur sm:grid grid-cols-2"
        style={{
          backgroundColor: hexToRgba("#fc0000", 0.3),
        }}
      >
        <div className="flex flex-col gap-2 text-[#2F2440]">
          <h3 className="font-bold text-black text-2xl mb-4 sm:text-3xl items-center md:text-4xl lg:text-5xl flex gap-2">
            BurghExpress
          </h3>
          <p>
            I embarked on an exciting journey to create BurghExpress, a Canadian
            food delivery app.
          </p>
          <p>
            Using React Native for the front-end, I aimed to provide users with
            a seamless and intuitive experience. The app&apos;s back-end,
            powered by Django and MySQL, ensured robust data management and
            smooth operation.
          </p>
          <p>
            Throughout the development process, I honed my skills in
            cross-platform app development, database management, and API
            integration. Each challenge I faced taught me the importance of
            adaptability and creativity in problem-solving.
          </p>

          <p>
            Building BurghExpress not only expanded my technical expertise but
            also deepened my understanding of user-centric design. This project
            was more than just coding; it was about creating a solution that
            brought convenience to people&apos;s lives. I am excited to continue
            applying these skills in future projects, always striving to make
            technology accessible and efficient for everyone.
          </p>
        </div>
        <div className="relative self-center justify-self-center border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[450px] w-[224px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="flex rounded-[2rem] overflow-hidden justify-center bg-white dark:bg-gray-800 bg-cover h-full w-full">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
            >
              <Image src={bg} alt="alt" />
              <Image src={bg1} alt="alt" />
              <Image src={bg2} alt="alt" />
              <Image src={bg3} alt="alt" />
              <Image src={bg4} alt="alt" />
              <Image src={bg5} alt="alt" />
              <Image src={bg6} alt="alt" />
              <Image src={bg7} alt="alt" />
            </Carousel>
          </div>
        </div>
        <div className="flex gap-4 text-sm whitespace-nowrap flex-wrap pt-4 border-white/30 border-t">
          <SiUpwork />
          <SiJavascript />
          <TbBrandReactNative />
          <SiDjango />
          <SiMysql />
          <SiGithub />
        </div>
      </div>
    </div>
  );
};

export default BurgExpress;
