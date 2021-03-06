import React, { useState } from "react";
import Instalacion0 from "../assets/bg_instalaciones/instalaciones-00.jpg";
import Instalacion1 from "../assets/bg_instalaciones/instalaciones-01.jpg";
import Instalacion2 from "../assets/bg_instalaciones/instalaciones-02.jpg";
import Instalacion3 from "../assets/bg_instalaciones/instalaciones-03.jpg";
import Instalacion4 from "../assets/bg_instalaciones/instalaciones-04.jpg";
import Instalacion5 from "../assets/bg_instalaciones/instalaciones-05.jpg";
import Instalacion6 from "../assets/bg_instalaciones/instalaciones-06.jpg";
import Instalacion7 from "../assets/bg_instalaciones/instalaciones-07.jpg";
import Instalacion8 from "../assets/bg_instalaciones/instalaciones-08.jpg";
import Instalacion9 from "../assets/bg_instalaciones/instalaciones-09.jpg";
import Instalacion10 from "../assets/bg_instalaciones/instalaciones-10.jpg";
import Instalacion11 from "../assets/bg_instalaciones/instalaciones-11.jpg";
import Instalacion12 from "../assets/bg_instalaciones/instalaciones-12.jpg";
import Instalacion13 from "../assets/bg_instalaciones/instalaciones-13.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";

function ImageSlider() {
  const images = [
    Instalacion0,
    Instalacion1,
    Instalacion2,
    Instalacion3,
    Instalacion4,
    Instalacion5,
    Instalacion6,
    Instalacion7,
    Instalacion8,
    Instalacion9,
    Instalacion10,
    Instalacion11,
    Instalacion12,
    Instalacion13,
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  function plusDivs(n) {
    n = slideIndex + n;

    if (n > images.length - 1) {
      n = 0;
    } else if (n < 0) {
      n = images.length - 1;
    }

    setSlideIndex(n);
  }

  return (
    <div className="flex flex-row items-stretch justify-center">
      <div
        className="p-5 flex flex-col justify-center cursor-pointer "
        onClick={() => plusDivs(-1)}
      >
        <IoIosArrowBack />
      </div>
      <div className="flex justify-center items-center h-almost-screen w-full relative select-none bg-secondary-blue bg-opacity-25 rounded-lg">
        <div className="absolute top-0 right-0 p-5 bg-white bg-opacity-75">
          ({slideIndex}/{images.length - 1})
        </div>
        {images.map((image, index) => (
          <img
            className={classNames(
              "mySlides h-almost-screen w-full object-contain",
              {
                hidden: slideIndex !== index,
              }
            )}
            src={image}
          />
        ))}
      </div>
      <div
        className="p-5 flex flex-col justify-center cursor-pointer"
        onClick={() => plusDivs(+1)}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default ImageSlider;
