import React, { Component, useEffect } from "react";
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Cube3d from "../cube3d";
import Link from 'next/link'
import Image from "next/image";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'






export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.slow
    };

    slides = [
        {
            key: uuidv4(),
            content:
                <Link href='/dragonKeeper'>
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
                </Link>
        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center xl:w-60 md:w-52 2xl:w-72 w-[17rem] rounded-lg bg-white sm:bg-inherit sm:p-1 p-5  sm:border-none  border-[#7b94b16b]">
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                        src='/cubos/Cubo_FUT.png'
                        alt='dragon Keeper'
                        width={400}
                        height={400} />
                    <div className='w-full p-2 text-sm text-justify text-white rounded-lg shadow-xl bg-primary'>
                        <h3 className="mb-1 text-xl text-center text-white border-b border-secondary">EL FUTURO YA ESTA AQUÍ</h3>
                        Largometraje de imágen real dirigido por Juan Vicente Córdoba.
                        A finales de los años 70 y principios de los 80 en Madrid algunas emisoras de radio estaban estrechamente vinculadas a la divulgación de lo que estaba fraguándose. Una peculiar explosión creativa que constituyó todo un fenómeno social que cobró su verdadera dimensión y su total plenitud en la calle. 
                    </div>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center justify-center w-full p-10 bg-white rounded-lg sm:bg-inherit h-80 sm:h-auto sm:p-0 xl:w-60 md:w-52 2xl:w-72">
                    <Cube3d/>
                    <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>
                    
                </div>
        },
        {
            key: uuidv4(),
            content:
            <div className="flex flex-col items-center justify-center w-full p-10 bg-white rounded-lg sm:bg-inherit h-80 sm:h-auto sm:p-0 xl:w-60 md:w-52 2xl:w-72">
            <Cube3d/>
            <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>
            
        </div>
        },
    ]


    render() {
        return (
            <div style={{ width: "100%", height: "100px", margin: "0 auto" }} className='flex flex-col items-start'>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
                <div className='z-10 flex flex-row justify-between w-full'>
                    {/* Button left */}
                    <div className="z-50 md:-ml-20 sm:-ml-4 -ml-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150 text-[#e1b6497b] sm:text-[#E1B649]"
                        onClick={() => {
                            this.setState({ goToSlide: this.state.goToSlide - 1 });
                        }}>
                        <MdOutlineArrowBackIosNew />
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* button right */}
                    <div className="z-50 md:-mr-20 sm:-mr-4 -mr-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150   text-[#e1b6497b] sm:text-[#E1B649]"
                        onClick={() => {
                            this.setState({ goToSlide: this.state.goToSlide + 1 });
                        }}>
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>
        );
    }
}