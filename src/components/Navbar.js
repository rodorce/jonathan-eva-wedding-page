import { Menu } from "iconoir-react";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const [menuColor, setMenuColor] = useState("text-white");

  const handleMenu = () => {
    menuColor !== "text-black"
      ? setMenuColor("text-black")
      : setMenuColor("text-white");

    showMenu !==
    "w-full fixed lg:hidden mx-auto bg-white text-black h-screen w-screen"
      ? setShowMenu(
          "w-full fixed lg:hidden mx-auto bg-white text-black h-screen w-screen"
        )
      : setShowMenu("hidden");
  };
  return (
    <>
      <div className="z-50 w-full text-white absolute">
        <div className="fixed right-0 top-0 z-50">
          {console.log(menuColor)}
          <Menu
            className={`${menuColor} block lg:hidden`}
            onClick={handleMenu}
          />
        </div>
        <div className="absolute text-center w-full">
          <h2 className="mx-12 font-Cookie text-xl cursor-pointer lg:hidden">
            Jonathan & Eva
          </h2>
        </div>
        <ul className="hidden lg:flex flex-row justify-center items-center">
          <a href="#nuestra-union">
            <li className="mx-8 font-Oswald cursor-pointer">Nuestra Unión</li>
          </a>
          <a href="#galeria">
            <li className="mx-8 font-Oswald cursor-pointer">Galería</li>
          </a>
          <a href="#">
            <li className="mx-12 font-Cookie text-4xl cursor-pointer">
              Jonathan & Eva
            </li>
          </a>
          <a href="#evento">
            <li className="mx-8 font-Oswald cursor-pointer">Evento</li>
          </a>
          <a href="#tradicion">
            <li className="mx-8 font-Oswald cursor-pointer">Una tradición</li>
          </a>
        </ul>
        {/* Mobile Menu  */}
        <ul className={showMenu}>
          <a href="#">
            <li
              className="mx-12 font-Cookie text-4xl cursor-pointer text-center"
              onClick={handleMenu}
            >
              Jonathan & Eva
            </li>
          </a>
          <a href="#nuestra-union">
            <li
              className="mx-8 font-Oswald cursor-pointer py-5 text-center"
              onClick={handleMenu}
            >
              Nuestra Unión
            </li>
          </a>
          <a href="#galeria">
            <li
              className="mx-8 font-Oswald cursor-pointer pb-5 text-center"
              onClick={handleMenu}
            >
              Galería
            </li>
          </a>
          <a href="#evento">
            <li
              className="mx-8 font-Oswald cursor-pointer pb-5 text-center"
              onClick={handleMenu}
            >
              Evento
            </li>
          </a>
          <a href="#tradicion">
            <li
              className="mx-8 font-Oswald cursor-pointer pb-5 text-center"
              onClick={handleMenu}
            >
              Una tradición
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
