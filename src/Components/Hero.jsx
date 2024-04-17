import React from "react";
import Button1 from "./Button1";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mt-28 lg:mt-56 lg:ml-20 ">
      <h1 className="w-full md:w-1/2 lg:w-3/5 text-5xl xl:text-8xl font-Jost font-medium drop-shadow-xl">
        ENERGY DENSE SATELLITE STRUCTURES
      </h1>
      <Button1 />
    </div>
  );
}

export default Hero;
