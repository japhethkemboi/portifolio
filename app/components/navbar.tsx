const Nav = () => {
  return (
    <section className="flex backdrop-blur z-10 absolute top-0 w-full py-2 px-10">
      <div className="space-x-3 lg:space-x-4 font-bold text-[#FAD02C] flex justify-end flex-grow">
        <a
          href="#home"
          className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl"
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl"
        >
          Projects
        </a>
        <a
          href="#about"
          className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Nav;
