import { Heart } from "iconoir-react";
import React from "react";
import photo from "../photos/7.jpg";
import church from "../photos/iglesia.svg";
import cubrebocas from "../photos/cubrebocas.svg";
import whatsapp from "../photos/whatsapp.png";
const InvitationDate = () => {
  return (
    <>
      <img src={photo} alt="" className="-z-10" />
      <div className="bg-white lg:-mt-72">
        <div
          className="bg-white z-10 lg:p-32 lg:mx-32 mx-8 px-8 lg:-mt-64 -mt-28 relative py-8"
          id="evento"
        >
          <img src={church} alt="iglesia" className="mx-auto w-32" />
          <Heart className="text-center mx-auto text-2xl" />
          <div className="lg:grid lg:grid-cols-2 lg:divide-x-4 pt-10 flex flex-col">
            <div className="lg:px-5 mb-10 lg:mb-0">
              <h3
                className="font-semibold text-3xl tracking-widest text-center font-Cookie"
                data-aos="fade-in"
              >
                Ceremonia Religiosa
              </h3>
              <h6
                className="font-medium text-md mt-5 tracking-wide text-center font-Playfair"
                data-aos="fade-in"
              >
                Parroquia Santísima Trinidad - 17:30 p.m.
              </h6>
              <h6 className="font-medium text-md mt-5 tracking-wide text-center font-Playfair">
                Canales #5715, Col. Hidalgo
              </h6>
            </div>
            <div className="px-5">
              <h3
                className="font-semibold text-3xl tracking-widest text-center font-Cookie"
                data-aos="fade-in"
              >
                Recepción
              </h3>
              <h6
                className="font-medium text-md mt-5 tracking-wide text-center font-Playfair"
                data-aos="fade-in"
              >
                Jardín Venezuela - 20:00 p.m.
              </h6>
              <h6
                className="font-medium text-md mt-5 tracking-wide text-center font-Playfair"
                data-aos="fade-in"
              >
                Venezuela #5118, Col. Palacios
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationDate;
