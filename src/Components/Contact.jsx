import React from "react";
import Button2 from "./Button2";
import Button3 from "./Button3";

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-40 gap-16 lg:gap-32">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="font-Jost text-5xl font-semibold">Contact Us</h1>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email Address" />
        <input type="text" placeholder="Please Enter Your Message" />
        <Button2 />
      </div>
      <div className="hidden xl:block">
        <h1 className="absolute mt-4 xl:mt-12 ml-14 text-black font-Jost text-4xl xl:text-6xl font-semibold">
          Currently in Stealth
        </h1>
        <div className="absolute mt-[72px] xl:mt-[180px] ml-14">
          <Button3 />
        </div>
        <img src="13.png" className="" />
      </div>
    </div>
  );
}

export default Contact;
