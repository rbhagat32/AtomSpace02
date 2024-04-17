import React from "react";

function Trusted() {
  return (
    <div className="text-center mt-[200px] md:mt-[300px] overflow-hidden z-20">
      <h1 className="font-Jost font-semibold text-4xl md:text-5xl">
        We Are TRUSTED By
      </h1>
      <div className="flex justify-center items-center my-24 gap-4 lg:gap-20 xl:gap-24">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-20 xl:gap-24">
          <div className="glass h-40 lg:h-52 w-40 lg:w-64 flex justify-center items-center">
            <img src="04.png" />
          </div>
          <div className="glass h-40 lg:h-52 w-40 lg:w-64 flex justify-center items-center">
            <img src="05.png" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-20 xl:gap-24">
          <div className="glass h-40 lg:h-52 w-40 lg:w-64 flex justify-center items-center">
            <img src="06.png" />
          </div>
          <div className="glass h-40 lg:h-52 w-40 lg:w-64 flex justify-center items-center">
            <img src="07.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
