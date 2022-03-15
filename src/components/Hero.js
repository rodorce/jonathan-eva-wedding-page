import React from "react";
import heroPhoto from "../photos/6.jpg";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-full w-full" id="inicio">
      <Navbar />
      <div className="object-cover m-0 p-0 h-full w-full relative z-0">
        <img src={heroPhoto} alt="wedding" />
      </div>
    </div>
  );
};

export default Hero;
