import React from "react";

function NavBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mx-5 md:mx-20 mt-10 md:mt-12 gap-6">
      <div className="flex justify-center items-center gap-3">
        <a href="#">
          <button className="hover:scale-125 transition">
            <img src="02.png" className="h-6 w-6" />
          </button>
        </a>
        <a href="#">
          <button>
            <h1 className="text-2xl md:text-3xl font-Jost font-bold hover:underline transition-opacity duration-1000">
              ATOM SPACE
            </h1>
          </button>
        </a>
      </div>
      <div className="rounded-full flex justify-between items-center text-base md:text-lg font-semibold px-5 py-2 bg-white/30 gap-0 md:gap-12">
        <a
          href="#"
          className="z-50 hover:bg-white text-white hover:text-black px-4 py-1 rounded-full duration-500"
        >
          <h2>Home</h2>
        </a>
        <a
          href="#"
          className="z-50 hover:bg-white text-white hover:text-black px-4 py-1 rounded-full duration-500"
        >
          <h2>TrustedBy</h2>
        </a>
        <a
          href="#"
          className="z-50 hover:bg-white text-white hover:text-black px-4 py-1 rounded-full duration-500"
        >
          <h2>Team</h2>
        </a>
        <a
          href="#"
          className="z-50 hover:bg-white text-white hover:text-black px-4 py-1 rounded-full duration-500"
        >
          <h2>Contact</h2>
        </a>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img src="03.png" className="h-6 w-40" />
      </div>
    </div>
  );
}

export default NavBar;
