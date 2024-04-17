import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-evenly lg:flex-row items-center lg:items-end gap-16 lg:gap-40">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-24">
        <div>
          <a href="#">
            <h2 className="font-bold mb-3 lg:mb-6 text-xl">Help</h2>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">Support</p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">Knowledge</p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">Tutorials</p>
          </a>
        </div>
        <div>
          <a href="#">
            <h2 className="font-bold mb-3 lg:mb-6 text-xl">Contact Us</h2>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">
              service@conferencecalling.com
            </p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">1-888-498-9244</p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">
              1960 East Grand Ave. #290
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <h2 className="font-bold mb-3 lg:mb-6 text-xl">Company</h2>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">About Us</p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">Careers</p>
          </a>
          <a href="#">
            <p className="font-light text-lg mb-3 lg:mb-6">Contact Us</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4  mb-3">
          <a href="#" className="socials">
            <img src="14.png" />
          </a>
          <a href="#" className="socials">
            <img src="15.png" />
          </a>
          <a href="#" className="socials">
            <img src="16.png" />
          </a>
          <a href="#" className="socials">
            <img src="17.png" />
          </a>
        </div>
        <p>&copy; Copyright ATOMSPACE inc.</p>
      </div>
    </div>
  );
}

export default Footer;
