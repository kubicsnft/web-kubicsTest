import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Cube from "../cube";
import Image from "next/image";
import Cube3d from "../cube3d";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carrusel1() {
    return (
        <div className="relative w-full max-w-full ">
            <div className="container max-w-full mx-auto">

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block mt-16 " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-center h-full gap-16 transition duration-700 ease-out md:gap-12 ">
                                    <Slide index={0}>
                                        <div className="flex flex-col items-center xl:w-60 md:w-52 2xl:w-72 w-[17rem]  rounded-lg bg-white sm:bg-inherit sm:p-1 p-5  ">
                                            <Image
                                                className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                                                src='/cubos/Cubo_DK.png'
                                                alt='dragon Keeper'
                                                width={400}
                                                height={400} />
                                            <div className='w-full p-2 text-sm text-justify text-white rounded-lg shadow-xl bg-primary '>
                                                <h3 className="mb-1 text-xl text-center text-white border-b border-secondary">DRAGONKEEPER</h3>
                                                Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.</div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col items-center xl:w-60 md:w-52 2xl:w-72 w-[17rem]  rounded-lg bg-white sm:bg-inherit sm:p-1 p-5  ">
                                            <Image
                                                className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                                                src='/cubos/Cubo_DK.png'
                                                alt='dragon Keeper'
                                                width={400}
                                                height={400} />
                                            <div className='w-full p-2 text-sm text-justify text-white rounded-lg shadow-xl bg-primary '>
                                                <h3 className="mb-1 text-xl text-center text-white border-b border-secondary">DRAGONKEEPER</h3>
                                                Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.</div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col items-center justify-center w-full p-10 bg-white rounded-lg sm:bg-inherit h-80 sm:h-auto sm:p-0 xl:w-60 md:w-52 2xl:w-72">
                                            <Cube3d />
                                            <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>

                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-col items-center justify-center w-full p-10 bg-white rounded-lg sm:bg-inherit h-80 sm:h-auto sm:p-0 xl:w-60 md:w-52 2xl:w-72">
                                            <Cube3d />
                                            <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>

                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 p-3 border-2 rounded-full border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
