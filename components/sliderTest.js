import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const Responsive ={
    0:{
        items:1.2,
        margin:5,
    },
    580:{
        items:2,
        margin:5,
    },
    768:{
        items:2.5,
        margin:5,
    },
    900:{
        items:3,
        margin:10,
    },
    1200:{
        items:3.5,
        margin:20,
    },
    1400:{
        items:4,
        margin:20,
    },
   
}



export default function Slider() {
  return (
    <div className="w-full">
      <OwlCarousel
      loop
      nav={true}
      responsive={Responsive}
      autoplay={true}
      dots={false}

      
      >
        <div className="item w-72 sm:w-96">
        <div className="flex flex-col items-center bg-white rounded-lg w-72 sm:w-96 ">
                    {/* <Link href=''> */}
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                        src='/cubos/Cubo_FUT.png'
                        alt='dragon Keeper'
                        width={250}
                        height={250} />
                    {/* </Link> */}
                    <h3 className="text-xl tracking-widest text-center text-secondary">EL FUTURO YA ESTA AQUÍ</h3>
                    <div className='w-full p-2 text-sm text-justify text-white rounded-lg shadow-xl bg-primary '>
                        Largometraje de imágen real dirigido por Juan Vicente Córdoba.
                        A finales de los años 70 y principios de los 80 en Madrid algunas emisoras de radio estaban estrechamente vinculadas a la divulgación de lo que estaba fraguándose. Una peculiar explosión creativa que constituyó todo un fenómeno social que cobró su verdadera dimensión y su total plenitud en la calle.
                    </div>
                </div>
        </div>
        <div className="item w-72 sm:w-96">
          <h4>2</h4>
        </div>
        <div className="item w-72 sm:w-96">
          <h4>3</h4>
        </div>
        <div className="item w-72 sm:w-96">
          <h4>4</h4>
        </div>
        
      </OwlCarousel>
    </div>
  );
}