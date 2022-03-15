import React from "react";
import { Church } from "iconoir-react";
const Location = () => {
  return (
    <div className="flex flex-row w-full h-full bg-[#f7f2ef]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14157.024363886092!2d-99.5341174!3d27.49241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5ab8ebe242faa65!2sParroquia%20Santisima%20Trinidad!5e0!3m2!1ses-419!2smx!4v1647146272945!5m2!1ses-419!2smx"
        className="w-1/2 h-[600px]"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="w-1/2 flex justify-center flex-col items-center h-full align-top pt-24 pb-8 pl-10 pr-10">
        <Church className="text-8xl mb-10" />
        <h2 className="font-bold text-4xl mb-10 uppercase font-Playfair">
          Ceremonia Religiosa
        </h2>
        <h6 className="font-medium text-xl mb-10 text-center font-Playfair">
          Viernes 29 de abril <br />
        </h6>
        <h4 className="font-medium text-xl mb-10 font-Playfair">
          Parroquia Santisima Trinidad
        </h4>
        <h6 className="font-medium text-xl mb-5 font-Playfair">
          Canales #5715, Col. Hidalgo, Nuevo Laredo, Tamaulipas.
        </h6>
      </div>
    </div>
  );
};

export default Location;
