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

const BurgExpress = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col py-10 bg-gradient-to-br from-[#e3edf6] to-[#fc0000] snap-start">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20 pr-3">
        <div className="py-20 w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-[#fc0000] md:block hidded">
            BurghExpress
          </h1>
          <div className="text-[#000] mt-10 w-auto h-full">
            <h4 className="text-2xl text-[#000] rounded font-bold">
              Tech Stack
            </h4>
            <div className="pl-5 mt-2 text-lg">
              <p className="text-blue-800">Javascript</p>
              <p>React Native</p>
              <p>Node js</p>
              <p>Expresss js</p>
              <p>MongoDB</p>
              <p>Neumophism</p>
            </div>
            <div className="pl-5 mt-4">
              <p className="text-blue-800">
                Canadian food delivery app linking users to restaurants for
                seamless ordering and delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[535px] w-[255px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="flex rounded-[2rem] overflow-hidden justify-center w-[230px] h-[500px] bg-white dark:bg-gray-800 bg-cover">
            <Carousel autoPlay={true} infiniteLoop={true}>
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
      </div>
    </div>
  );
};

export default BurgExpress;
