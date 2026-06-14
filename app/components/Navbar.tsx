"use client";
import Image from "next/image";
import { navbarData } from "../lib/placeholder-data";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { inter } from "@/app/fonts/fonts";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setState((e) => !e)}
        className={`fixed top-5 left-5 z-200 cursor-pointer md:hidden `}
      >
        <X
          size={20}
          className={`transform transition-all duration-300 absolute top-0 left-0 ${state ? "scale-100 opacity-100 rotate-90" : "-rotate-90 scale-0 opacity-0"}`}
        />
        <Menu size={20} 
            className={`transform transition-all duration-300 absolute top-0 left-0 ${state ? "scale-0 opacity-0  rotate-90" : "scale-100 opacity-100"}  `}
        />
      </button>
      <nav
        className={`w-full h-screen  py-20 fixed top-0 shadow-md z-100 bg-background/50 grid grid-cols-2 grid-rows-4 md:px-8 md:items-center md:justify-items-center   md:translate-x-0 md:transform-none md:min-w-full  md:h-20  md:py-0 md:grid   md:grid-cols-3 md:grid-rows-1    md:fixed   transform duration-300 transition-all   ${state ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="col-start-1 col-end-2  justify-self-center ">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="brand-logo"
            className="w-[70] h-auto md:w-[100]  "
          />
        </div>
        <div
          className={`row-start-2 row-end-4 col-start-1 col-end-4 flex flex-col items-center justify-around md:flex-row md:col-start-2 md:col-end-3 md:row-span-1 lg:gap-8 md:gap-4 uppercase font-bold`}
        >
          {navbarData.navItems.map((e, idx) => (
            <Link
              key={idx}
              href={`${e.link}`}
              className={` ${inter.variable} text-primary transform duration-150 transition-transform hover:scale-110 `}
              onClick={() => setState(false)}
            >
              {e.item}
            </Link>
          ))}
        </div>
        <div className={`col-start-2 col-end-3 md:col-start-3 md:col-end-4`}>
          <SearchBar
            searchTerm="Cappucino"
            classes="w-30"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
