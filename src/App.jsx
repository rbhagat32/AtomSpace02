import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Trusted from "./Components/Trusted";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full h-full text-white">
      <img
        src="01.png"
        className="absolute w-full h-5/6 lg:h-full top-0 -z-20 "
      />
      <NavBar />
      <Hero />
      <Trusted />
      <Team />
      <img
        src="12.png"
        className="absolute top-[640px] lg:top-[800px] -left-48 lg:left-12 -z-10 opacity-70 overflow-hidden"
      />
      <img
        src="12.png"
        className="absolute top-[1000px] xl:top-[1150px] left-0 xl:left-[800px] -z-10 opacity-70 overflow-hidden"
      />
      <img
        src="12.png"
        className="absolute top-[1400px] -left-24 xl:left-28 -z-10 opacity-70 overflow-hidden"
      />
      <img
        src="12.png"
        className="absolute top-[1800px] left-0 xl:left-[550px] -z-10 opacity-70 overflow-hidden"
      />
      <Contact />
      <div className="my-64">
        <Footer />
      </div>
    </div>
  );
}

export default App;
