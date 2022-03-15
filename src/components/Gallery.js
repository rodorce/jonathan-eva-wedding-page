import React from "react";
import photo_1 from "../photos/1.jpg";
import photo_2 from "../photos/2.jpg";
import photo_3 from "../photos/3.jpg";
import photo_4 from "../photos/4.jpg";
import photo_5 from "../photos/5.jpg";
import photo_6 from "../photos/6.jpg";
import photo_7 from "../photos/7.jpg";
import photo_8 from "../photos/8.jpg";
import photo_9 from "../photos/9.jpg";
import photo_10 from "../photos/10.jpg";

const Gallery = () => {
  return (
    <>
      <div
        className="grid grid-cols-8 grid-rows-10 bg-green-100 p-4 lg:p-20 gap-4 grid-flow-row"
        id="galeria"
      >
        <img
          src={photo_1}
          alt="1"
          className="col-start-1 col-end-4 row-start-1 row-end-2 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_2}
          alt="2"
          className="col-start-4 col-end-7 row-start-1 row-end-2 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_4}
          alt="2"
          className="col-start-7 col-end-9 row-start-1 row-end-3 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_3}
          alt="2"
          className="col-start-1 col-end-7 row-start-2 row-end-5 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_5}
          alt="2"
          className="col-start-7 col-end-9 row-start-3 row-end-5 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_5}
          alt="2"
          className="col-start-1 col-end-3 row-start-5 row-end-7 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_6}
          alt="2"
          className="col-start-3 col-end-6 row-start-5 row-end-6 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_7}
          alt="2"
          className="col-start-6 col-end-9 row-start-5 row-end-6 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_9}
          alt="2"
          className="col-start-1 col-end-3 row-start-7 row-end-10 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_10}
          alt="2"
          className="col-start-3 col-end-9 row-start-6 row-end-9 hover:scale-105 transform transition duration-500"
        />
        <img
          src={photo_8}
          alt="2"
          className="col-start-1 col-end-9 row-start-9 hover:scale-105 transform transition duration-500"
        />
      </div>
    </>
  );
};

export default Gallery;
