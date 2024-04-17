import React from "react";

function Team() {
  return (
    <div className="text-center my-20 z-20">
      <h1 className="font-Jost font-semibold text-5xl md:text-6xl">Team</h1>
      <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-40">
        <div className="flex flex-col gap-6">
          <div className="glass h-fit w-72 lg:w-96">
            <img src="08.png" />
            <h2 className="text-3xl mt-6 font-Jost">Shryas Bhurat</h2>
            <p className="mt-2">CEO & Co-Founder</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <a href="#">
              <img src="10.png" className="h-12 w-12 socials z-50" />
            </a>
            <a href="#">
              <img src="11.png" className="h-12 w-12 socials z-50" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="glass h-fit w-72 lg:w-96">
            <img src="09.png" />
            <h2 className="text-3xl mt-6 font-Jost">Nithyashree</h2>
            <p className="mt-2">CTO & Co-Founder</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <a href="#">
              <img src="10.png" className="h-12 w-12 socials z-50" />
            </a>
            <a href="#">
              <img src="11.png" className="h-12 w-12 socials z-50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
