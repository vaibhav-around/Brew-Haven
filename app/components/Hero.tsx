import React from "react";
import Image from "next/image";
import { poppins } from "../fonts/fonts";
import { heroSectionData } from "../lib/placeholder-data";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      
      <Image
        src={"/assets/brew-haven-bg.png"}
        alt="brew-haven-background-image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover z-0 hidden md:block"
        loading="lazy"
      />
      <Image
        src={"/assets/mobile-screen-bg.png"}
        alt="brew-haven-background-image"
        width={768}
        height={1024}
        loading="lazy"
        className="w-full h-full object-cover md:hidden z-0"
      />
      <motion.div
      initial={{ left: -100}}
      animate={{ left: 1}}
      transition={{
        duration: 0.54
      }}
      className="absolute inset-0 bg-transparent flex flex-col gap-4 items-start justify-center md:pl-32 pl-10">
        <h1 className={`${poppins.className} text-4xl text-primary `}>{heroSectionData.heading[0]}</h1>
        <p className="text-secondary text-sm">{heroSectionData.subHeading[0]}</p>
        
        <div className="flex items-center justify-center gap-2 ">{
          heroSectionData.buttonText.map((e,idx) => (
            <button key={idx} className="bg-primary rounded-lg text-white cursor-pointer shadow-md p-2 transform transition-all hover:scale-110 duration-200 ease-in-out">{e}</button>
          ))
        }
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
