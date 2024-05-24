import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col py-10 snap-start">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20 pr-3">
        <div className="py-20 w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-yellow-300">
            What Previous clients say about me
          </h1>
        </div>

        <div className="text-[#000] mt-10 w-auto h-full">
          <h4 className="text-2xl text-[#000] rounded font-bold">Tech Stack</h4>
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
        <Carousel autoPlay={true} infiniteLoop={true}></Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
