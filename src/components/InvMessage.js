import React from "react";
import ejphoto from "../photos/4.jpg";
import invphoto from "../photos/1.jpg";
const InvMessage = () => {
  return (
    <div
      className="flex flex-row w-full h-full bg-[#dcd9c9]"
      id="nuestra-union"
    >
      <div className="lg:w-2/3 flex justify-center flex-col items-center align-top py-14">
        <h3
          className="mx-12 font-Cookie lg:text-9xl text-6xl text-center"
          data-aos="fade-down"
        >
          Jonathan
        </h3>
        <h3
          className="mx-12 font-Cookie lg:text-9xl text-6xl text-center"
          data-aos="fade-down"
        >
          &
        </h3>
        <h3
          className="mx-12 font-Cookie lg:text-9xl text-6xl text-center"
          data-aos="fade-down"
        >
          Eva
        </h3>
        <div className="invitacion text-center lg:px-32 px-8 py-8 font-Playfair text-xl">
          <p data-aos="fade-down">
            La medida del amor es amar sin medida - San Agustín
          </p>
          <br />
          <p data-aos="fade-down text-xl">
            Estamos felices de compartir con ustedes éste día tan especial para
            nostros.
          </p>
          <br />
        </div>
      </div>
      <img src={ejphoto} className="lg:w-1/3 lg:block hidden" />
    </div>
  );
};

export default InvMessage;
