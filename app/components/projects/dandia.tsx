import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import dandia1 from "../../../public/images/dandia/1.jpg";
import dandia2 from "../../../public/images/dandia/2.jpg";
import dandia3 from "../../../public/images/dandia/3.jpg";
import dandia4 from "../../../public/images/dandia/4.jpg";
import dandia5 from "../../../public/images/dandia/5.jpg";
import dandia6 from "../../../public/images/dandia/6.jpg";

const Dandia = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col py-10 bg-gradient-to-br from-[#fff] pl-3 snap-start">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[255px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="flex rounded-[2rem] overflow-hidden justify-center w-[230px] h-[520px] bg-white dark:bg-gray-800">
            <Carousel autoPlay={true} infiniteLoop={true}>
              <Image src={dandia1} alt="alt" />
              <Image src={dandia2} alt="alt" />
              <Image src={dandia3} alt="alt" />
              <Image src={dandia4} alt="alt" />
              <Image src={dandia5} alt="alt" />
              <Image src={dandia6} alt="alt" />
            </Carousel>
          </div>
        </div>
        <div className="py-20 w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-[#c56363] md:block hidded">
            Dandia
          </h1>
          <div className="text-[#000] mt-10 w-auto h-full">
            <h4 className="text-2xl text-[#000] rounded font-bold">
              Tech Stack
            </h4>
            <div className="mt-2 text-lg">
              <p className="text-blue-800">Javascript</p>
              <p>React Native</p>
              <p>Node js</p>
              <p>Expresss js</p>
              <p>MongoDB</p>
            </div>
            <div className="mt-4">
              <p className="text-blue-800">
                A versatile Kenyan cross-platform app facilitating easy bookings
                for cars, buses, and shuttles, streamlining transportation
                options for users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dandia;
