const Nav = () => {
  return (
    <section className="flex z-10 absolute top-0 w-full py-2 px-10">
      <div className="space-x-3 lg:space-x-4 font-bold text-white flex justify-end flex-grow">
        <a className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
          Home
        </a>
        <a className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
          Projects
        </a>
        <a className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
          About
        </a>
        <a className="hover:text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Nav;
