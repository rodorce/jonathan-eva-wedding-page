import React from "react";
import { Flower } from "iconoir-react";
const Quote = () => {
  return (
    <div className="bg-stone-200 relative lg:px-64 p-16 lg:pb-32 lg:pt-32 text-center flex justify-center items-center flex-col">
      <Flower className="text-2xl lg:text-4xl lg:mb-16 mb-8 animate-spin-slow" />
      <h3
        className="text-xl lg:text-6xl font-Playfair pb-4 text-black  font-extralight"
        data-aos="fade-down"
      >
        Y ahora que estás aquí, veo el amor convertido en ti.
      </h3>
      <span
        className="text-xl lg:text-6xl font-Playfair pt-8 block text-black  font-extralight"
        data-aos="fade-down"
      >
        - Carlos Rivera
      </span>
      <Flower className="text-2xl lg:text-4xl lg:mt-16 mt-8 animate-spin-slow" />
    </div>
  );
};

export default Quote;
