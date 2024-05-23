const Questionnaire = () => {
  return (
    <div className="mt-10 space-y-10 flex flex-col py-10 pl-3 bg-gradient-to-br from-[#28cab2] to-[#fff] snap-start">
      <div className="flex w-full flex-col sm:flex-row p-0 lg:px-20">
        <div className="py-20 w-full flex flex-col px-10">
          <h1 className="font-bold text-4xl text-[#c56363] md:block hidded">
            Questionnaire App
          </h1>
          <div className="text-[#000] mt-10 w-auto h-full">
            <h4 className="text-2xl text-[#000] rounded font-bold">
              Tech Stack
            </h4>
            <div className="mt-2 text-lg">
              <p className="text-blue-800">Javascript</p>
              <p className="whitespace-nowrap">React Native</p>
              <p>Firebase</p>
            </div>
            <div className="mt-4">
              <p className="text-blue-800">
                Questionnaire app designed to estimate users&apos; video game
                addiction levels through comprehensive assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
