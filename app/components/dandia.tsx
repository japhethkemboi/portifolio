import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import dandia1 from "../../public/images/dandia/1.jpg";
import dandia2 from "../../public/images/dandia/2.jpg";
import dandia3 from "../../public/images/dandia/3.jpg";
import dandia4 from "../../public/images/dandia/4.jpg";
import dandia5 from "../../public/images/dandia/5.jpg";
import dandia6 from "../../public/images/dandia/6.jpg";
import { SiDjango, SiGithub, SiJavascript, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Dandia = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white/40 gap-4 w-full p-4 sm:grid grid-cols-2">
      <div className="flex flex-col gap-2 text-[#2F2440]">
        <h3 className="font-bold text-black text-2xl mb-4 sm:text-3xl items-center md:text-4xl lg:text-5xl flex gap-2">
          Dandia
        </h3>
        <p>
          Creating Dandia was a thrilling venture into the world of
          transportation apps. This Kenyan-based platform enables users to book
          cabs, shuttles, buses, and even movers with ease. Each feature was
          designed with the user in mind, ensuring a straightforward and
          efficient booking process.
        </p>
        <p>
          Utilizing React Native for a responsive interface and Django with
          MySQL for a reliable backend, I focused on building a seamless user
          experience.
        </p>
        <p>
          Throughout the project, I deepened my expertise in cross-platform
          development, API integration, and database management.
        </p>

        <p>
          Developing Dandia taught me the significance of user-centric design
          and the impact of technology on everyday life. This project not only
          expanded my technical skills but also reinforced my commitment to
          creating solutions that simplify and enhance daily experiences.
          I&apos;m eager to bring this knowledge to future endeavors, continuing
          to innovate in the tech space.
        </p>
      </div>
      <div className="relative self-center justify-self-center h-auto w-[224px] rounded-lg overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
        >
          <Image src={dandia1} alt="alt" />
          <Image src={dandia2} alt="alt" />
          <Image src={dandia3} alt="alt" />
          <Image src={dandia4} alt="alt" />
          <Image src={dandia5} alt="alt" />
          <Image src={dandia6} alt="alt" />
        </Carousel>
      </div>
      <div className="flex gap-4 text-sm whitespace-nowrap flex-wrap pt-4 border-white/60 border-t">
        <SiJavascript />
        <TbBrandReactNative />
        <SiDjango />
        <SiMysql />
        <SiGithub />
      </div>
    </div>
  );
};

export default Dandia;
