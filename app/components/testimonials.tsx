import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  RiSingleQuotesL,
  RiSingleQuotesR,
  RiUserSmileLine,
} from "react-icons/ri";
import testimonials from "./testimonials.json";
import { BsChatQuote } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonials = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col gap-6 py-10 border-t justify-center p-4 items-center">
      <h1 className="flex gap-2 text-black dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
        What Previous clients say about me
        <BsChatQuote />
      </h1>
      <Carousel
        showStatus={false}
        showIndicators={false}
        // showArrows={false}
        infiniteLoop={true}
        interval={8000}
        useKeyboardArrows={true}
        autoPlay={true}
        className="max-w-4xl"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {testimonial.image && (
              <div className="relative h-[300px] w-full">
                <Image
                  src={testimonial.image}
                  alt={`japhe screenshot`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
            {testimonial.text_testimonial && (
              <div className="flex gap-2">
                <RiSingleQuotesL />
                <p className="text-gray-600 text-center italic">
                  {testimonial.text_testimonial}
                </p>
                <RiSingleQuotesR />
              </div>
            )}
            <div className="flex gap-2 text-left">
              {testimonial.employer_image ? (
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src={testimonial.employer_image}
                    alt={`${testimonial.employer_name} testimonial`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              ) : (
                <RiUserSmileLine size={40} />
              )}
              <div className="fle flex-col gap-2">
                <h2 className="font-semibold text-sm">
                  {testimonial.employer_name}
                </h2>
                <p className="text-gray-400 text-xs">{testimonial.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <button className="border rounded-full hover:scale-125 p-2">
          <GrPrevious size={40} />
        </button>
        <button className="border rounded-full hover:scale-125 p-2">
          <GrNext size={40} />
        </button> */}
    </div>
  );
};

export default Testimonials;
