"use client";
import React, { useState } from "react";
import { CgClose, CgOptions } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <section className="w-full flex flex-col p-4 gap-8 grow">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white">
          Search
        </h2>
        <p className="text-xs text-ablack/80">
          Search anything, from projects, tags, previous employers and other
          keywords
        </p>
      </div>
      <div className="flex gap-4 items-center w-full">
        <div className="relative rounded-full flex grow border items-center">
          <RiSearchLine className="absolute left-3" />
          <input
            className="grow bg-transparent rounded-full p-2 px-10 items-center"
            placeholder="Search a project, tag or keyword"
          />
          <button className="absolute right-3">
            <CgClose />
          </button>
        </div>
        <button className="p-2 hover:opacity-70 rounded-full hover:bg-black/40">
          <CgOptions size={28} />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <button className="rounded-lg p-2 bg-slate-400">
          Previous employers
        </button>
        <button className="rounded-lg p-2 bg-slate-400">Upwork</button>
        <button className="rounded-lg p-2 bg-slate-400">Javascript</button>
        <button className="rounded-lg p-2 bg-slate-400">Python</button>
        <button className="rounded-lg p-2 bg-slate-400">Django</button>
        <button className="rounded-lg p-2 bg-slate-400">Canadian</button>
      </div>
    </section>
  );
};

export default Search;
