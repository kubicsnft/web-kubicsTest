import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Cube from "../cube";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carrusel1() {
    return (
        <div className="relative w-full max-w-full ">
            <div className="container max-w-full mx-auto">
                <div className="flex items-center justify-center w-full h-full">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={3} step={1} infinite={true}>
                        <div className="relative flex items-center justify-center w-full">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute p-3 border-2 rounded-full cursor-pointer left-10 border[#7094b1] focus:outline-none focus:bg-[#E1B649] " id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="#7094b1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-9/12 h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                                <Slider>
                                    <div id="slider" className="flex items-start justify-center h-full gap-2 transition duration-700 ease-out md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 ">
                                        <Slide index={0}>
                                            <div className="relative flex justify-center overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                                                <Cube link='./dragonKeeper' img='./img.png' />
                                            </div>
                                            <div className='p-4 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                                                <h3 className="mb-1 text-xl text-center text-white border-b border-secondary">DRAGONKEEPER</h3>
                                                Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                                                <Cube link='./test' />
                                            </div>
                                            <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                                                <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                                                </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                                                <Cube link='' />
                                            </div>
                                            <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                                                <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                                                </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                                                <Cube link='./test' />
                                            </div>
                                            <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                                                <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                                                </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute p-3 border-2 rounded-full cursor-pointer right-10 border[#7094b1] focus:outline-none focus:bg-[#E1B649] " id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="#7094b1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="hidden lg:hidden md:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
                        <div className="relative flex items-center justify-center w-full">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="h-full mx-auto overflow-x-hidden overflow-y-hidden 4/5">
                                <Slider>
                                    <div id="slider" className="flex items-center justify-center h-full gap-16 transition duration-700 ease-out md:gap-12 ">
                                        <Slide index={0}>

                                            <div className="relative flex justify-center overflow-hidden md:w-36 md:h-36 ">
                                                <Cube link='./test' img='/img.png' />

                                            </div>
                                            <h3 className="mt-4 text-xl">DRAGONKEEPER</h3>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="relative flex overflow-hidden md:w-36 md:h-36 ">
                                                <Cube link='./test' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="relative flex overflow-hidden md:w-36 md:h-36 ">
                                                <Cube link='' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="relative flex overflow-hidden md:w-36 md:h-36 ">
                                                <Cube link='./test' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
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
                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider className="hidden block mt-16 " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                        <div className="relative flex items-center justify-center w-full">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="flex items-center justify-center h-full gap-16 transition duration-700 ease-out md:gap-12 ">
                                        {/* <Slide index={0}>

                                            <div className="relative flex justify-center overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 2xl:w-72 2xl:h-72">
                                                <Cube link='./test' img='/img.png' />

                                            </div>
                                            <h3 className="mt-4 text-xl">DRAGONKEEPER</h3>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-56 2xl:w-56 2xl:w-72 2xl:h-72">
                                                <Cube link='./test' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-56 2xl:w-56 2xl:w-72 2xl:h-72">
                                                <Cube link='' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-56 2xl:w-56 2xl:w-72 2xl:h-72">
                                                <Cube link='./test' />
                                            </div>
                                            <h3 className="mt-4 text-xl">PROXIMAMENTE...</h3>
                                        </Slide> */}

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
        </div>
    );
}
