import { Heart } from "iconoir-react";
import React from "react";
import photo from "../photos/7.jpg";
const InvitationDate = () => {
  return (
    <>
      <img src={photo} alt="" className="-z-10" />
      <div className="bg-green-100 lg:-mt-72">
        <div
          className="bg-green-100 z-10 lg:py-32 lg:mx-32 mx-8 lg:px-32 px-8 lg:-mt-64 -mt-28 relative py-8"
          id="evento"
        >
          <h3
            className="font-semibold lg:text-6xl text-3xl text-center font-Oswald tracking-wider lg:mb-12"
            data-aos="fade-in"
          >
            El gran día
          </h3>
          <Heart className="text-center mx-auto text-2xl" />
          <div className="lg:grid lg:grid-cols-2 lg:divide-x-4 pt-10 flex flex-col">
            <div className="lg:px-5 mb-10 lg:mb-0">
              <h3
                className="font-semibold text-3xl tracking-widest text-center font-Oswald"
                data-aos="fade-in"
              >
                Lugar
              </h3>
              <h6
                className="font-medium text-sm mt-5 tracking-wide text-center"
                data-aos="fade-in"
              >
                Parroquia Santisima Trinidad Canales #5715, Col. Hidalgo, Nuevo
                Laredo, Tamaulipas.
              </h6>
              <h6
                className="font-medium text-sm mt-5 tracking-wide text-center"
                data-aos="fade-in"
              >
                Jardin Venezuela
              </h6>
            </div>
            <div className="px-5">
              <h3
                className="font-semibold text-3xl tracking-widest text-center font-Oswald"
                data-aos="fade-in"
              >
                Fecha
              </h3>
              <h6
                className="font-medium text-sm mt-5 tracking-wide text-center"
                data-aos="fade-in"
              >
                Viernes 29 de abril <br />
                <br />
              </h6>
              <h6
                className="font-medium text-sm mt-5 tracking-wide text-center"
                data-aos="fade-in"
              >
                Recepción a las 8 pm
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationDate;
