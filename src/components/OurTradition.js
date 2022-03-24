import { ArrowRight, Gift, Mail, MailOpened, MoneySquare } from "iconoir-react";
import cubrebocas from "../photos/cubrebocas.svg";
import whatsapp from "../photos/whatsapp.png";
import React from "react";

const OurTradition = () => {
  return (
    <div className="lg:p-32 p-8 mb-16" id="tradicion">
      <MailOpened
        className="font-semibold lg:text-8xl text-6xl font-Oswald tracking-wider text-center text-pink-400 mx-auto mb-10"
        data-aos="fade-down"
      />
      <h2
        className="font-extrabold lg:text-6xl text-4xl font-Cookie tracking-wider text-center pb-10"
        data-aos="fade-down"
      >
        Una tradición
      </h2>
      <p className=" text-center text-xl pb-10 font-Playfair">
        La lluvia de sobres es la tradición de regalar dinero en efectivo a los
        novios en un sobre en el día del evento.
      </p>
      <div className="flex flex-row justify-center">
        <Mail className="mx-5 lg:text-4xl text-pink-400" />{" "}
        <span className="lg:text-4xl">+</span>
        <MoneySquare className="mx-5 lg:text-4xl text-green-600" />{" "}
        <ArrowRight className="lg:text-3xl" />
        <Gift className="mx-5 lg:text-4xl text-blue-500" />
        <span className="lg:text-4xl font-Oswald">=</span>
        <span className="lg:text-4xl font-Playfair mx-5">¡Gracias!</span>
      </div>
      <div className="flex flex-col justify-center lg:pt-4 py-16">
        <a href="https://wa.me/5218672041076/?text=Hola%2C+confirmo+mi+asistencia+al+evento.">
          <div class="text-lg cursor cursor-pointer flex flex-row justify-center items-center lg:mx-64 lg:mt-12 mt-2 px-6 py-2 transition-colors duration-300 border-2 rounded-full shadow-xl text-green-500 border-green-400 shadow-green-300/30 hover:bg-green-500 hover:text-pink-100">
            <img src={whatsapp} className="h-8 pr-4" />
            Confirmar asistencia
          </div>
        </a>
      </div>
      <div className="flex flex-col w-full justify-center">
        <h4
          className="font-medium text-2xl text-center font-Playfair pb-4"
          data-aos="fade-in"
        >
          Evento formal - No niños
        </h4>
        <img
          src={cubrebocas}
          alt="cubrebocas"
          className="mx-auto w-28"
          data-aos="fade-in"
        />
      </div>
    </div>
  );
};

export default OurTradition;
