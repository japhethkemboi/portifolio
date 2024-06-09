import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const Questionnaire = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col py-10 pl-3 bg-gradient-to-br from-[#28cab2] to-[#fff] snap-start h-screen">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20">
        <div className="py-5 w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-[#c56363] md:block hidded">
            Questionnaire App
          </h1>
          <div className="mt-4">
            <p className="text-blue-800">
              Questionnaire app designed to estimate users&apos; video game
              addiction levels through comprehensive assessments.
            </p>
          </div>
          <div className="flex flex-col text-[#000] mt-10 w-auto flex-1">
            <div className="flex-1"></div>
            <div className="mt-2 text-lg flex gap-4">
              <IoLogoJavascript color="yellow" size={32} />
              <TbBrandReactNative color="blue" size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
