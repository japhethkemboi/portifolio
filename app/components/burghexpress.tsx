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
import { IoLogoJavascript } from "react-icons/io5";
import {
  TbBrandDjango,
  TbBrandMysql,
  TbBrandReactNative,
} from "react-icons/tb";
import { BiLogoStripe } from "react-icons/bi";

const BurgExpress = () => {
  return (
    <div className="space-y-10 flex flex-col py-14 bg-gradient-to-br from-[#e3edf6] to-[#fc0000] snap-start">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20 pr-3">
        <div className="w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-[#fc0000] md:block hidded">
            BurghExpress
          </h1>
          <div className="my-5">
            <p className="text-[#2F2440] font-bold">
              Canadian food delivery app linking users to restaurants for
              seamless ordering and delivery.
            </p>
          </div>
          <div className="hidden sm:block text-lg whitespace-nowrap font-bold text-[#2F2440]">
            <div className="flex gap-2 items-center">
              <IoLogoJavascript />
              <p className="text-blue-800 flex gap-2">Javascript</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandReactNative />
              <p className="text-blue-800 flex gap-2">React Native</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandDjango />
              <p className="text-blue-800 flex gap-2">Django</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandMysql />
              <p className="text-blue-800 flex gap-2">MySql</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiLogoStripe />
              <p className="text-blue-800 flex gap-2">Stripe</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 px-10 items-center">
          <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[450px] w-[224px]">
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
          <div className="sm:hidden text-lg whitespace-nowrap font-bold text-[#2F2440]">
            <div className="flex gap-2 items-center">
              <IoLogoJavascript />
              <p className="text-blue-800 flex gap-2">Javascript</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandReactNative />
              <p className="text-blue-800 flex gap-2">React Native</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandDjango />
              <p className="text-blue-800 flex gap-2">Django</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBrandMysql />
              <p className="text-blue-800 flex gap-2">MySql</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiLogoStripe />
              <p className="text-blue-800 flex gap-2">Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgExpress;
