import { SiJavascript, SiUpwork } from "react-icons/si";
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

const Questionnaire = () => {
  return (
    <div
      className="flex flex-col rounded-lg p-2 text-xs lg:text-sm gap-2"
      style={{ backgroundColor: hexToRgba("#28cab2", 0.3) }}
    >
      <h1 className="font-bold text-lg lg:text-xl text-[#c56363] md:block hidded">
        Questionnaire App
      </h1>
      <p className="text-blue-800">
        Questionnaire app designed to estimate users&apos; video game addiction
        levels through comprehensive assessments.
      </p>
      <div className="flex pt-2 gap-2 border-t">
        <SiUpwork />
        <SiJavascript />
        <TbBrandReactNative />
      </div>
    </div>
  );
};

export default Questionnaire;
