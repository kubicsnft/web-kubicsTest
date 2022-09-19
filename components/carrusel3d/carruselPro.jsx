import React, { Component, useEffect, useState } from "react";
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Cube3d from "../cube3d";
import Link from 'next/link'
import Image from "next/image";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'



export default function Slider(props) {

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        showNavigation: false,
        config: config.default,

    });

    const [desplegar, setDesplegar] = useState({
        desplegar: 'hidden',
        mas: 'inline cursor-pointer'
    });

    const changueText = () => {
        (desplegar.mas === 'inline cursor-pointer')
            ?
            setDesplegar({
                desplegar: 'block',
                mas: 'hidden'
            })
            :
            setDesplegar({
                desplegar: 'hidden',
                mas: 'inline cursor-pointer'
            })
    }
    // console.log(desplegar.mas)

    const slides = [
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center bg-white rounded-lg border-primary w-72 sm:w-96 ">
                    <Link href='/dragonKeeper'>
                        <Image
                            className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                            src='/cubos/Cubo_DK.png'
                            alt='dragon Keeper'
                            width={250}
                            height={250} />
                    </Link>
                    <h3 className="text-xl tracking-widest text-center text-secondary">DRAGONKEEPER</h3>
                    <div className='w-full p-2 text-sm text-justify text-white border-t rounded-lg shadow-xl bg-primary '>
                        Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.</div>
                </div>
        },
        {
            key: uuidv4(),
            content:

                <div className="flex flex-col items-center justify-start rounded-lg bg-slate-300 w-72 sm:w-96 ">
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
                        A finales de los años 70 y principios de los 80 en Madrid algunas emisoras de radio estaban estrechamente vinculadas a la divulgación de lo que estaba fraguándose. Una peculiar explosión creativa que constituyó todo
                        <span id='{desplegar}' className={desplegar.desplegar}>
                            un fenómeno social que cobró su verdadera dimensión y su total plenitud en la calle.
                            <div onClick={changueText} id="menos" className="cursor-pointer">... [leer menos]</div>
                        </span>
                        <div onClick={changueText} className={desplegar.mas}>... [leer más]</div>
                    </div>

                </div>

        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center justify-center mb-16 bg-white rounded-lg w-72 sm:w-96 h-96">
                    <Cube3d />
                    <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center justify-center mb-16 bg-white rounded-lg w-72 sm:w-96 h-96">
                    <Cube3d />
                    <h3 className="absolute mb-1 text-2xl font-bold text-center text-secondary ">COMING SOON...</h3>
                </div>
        },
    ]



    return (
        <div className="flex items-center bg-whites h-[25rem]">
            <div style={{ width: "100%", height: "100px", margin: "0 auto" }} className='flex-col items-center hidden lg:flex'>
                <Carousel
                    slides={slides}
                    goToSlide={state.goToSlide}
                    offsetRadius={state.offsetRadius}
                    showNavigation={state.showNavigation}
                    animationConfig={state.config}
                />
                <div className='z-10 flex flex-row justify-between w-full'>
                    {/* Button left */}
                    <div className="z-50 md:-ml-20 sm:-ml-4 -ml-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150 text-[#E1B649]"
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide - 1 });
                        }}>
                        <MdOutlineArrowBackIosNew />
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* button right */}
                    <div className="z-50 md:-mr-20 sm:-mr-4 -mr-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150   text-[#E1B649]"
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide + 1 });
                        }}>
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>
            <div style={{ width: "80%", height: "100px", margin: "0 auto" }} className='flex flex-col items-start lg:hidden'>
                <Carousel
                    slides={slides}
                    goToSlide={state.goToSlide}
                    offsetRadius={state.offsetRadius}
                    showNavigation={state.showNavigation}
                    animationConfig={state.config}
                />
                <div className='z-10 flex flex-row justify-between w-full -mt-24'>
                    {/* Button left */}
                    <div className="z-50 -ml-10 border-secondary bg-white p-1 border rounded-full text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-105 text-[#E1B649]"
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide - 1 });
                        }}>
                        <MdOutlineArrowBackIosNew />
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* button right */}
                    <div className="z-50 -mr-10 text-3xl border-secondary bg-white p-1 border rounded-full transition duration-300 ease-in-out cursor-pointer  hover:scale-105   text-[#E1B649]"
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide + 1 });
                        }}>
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>
        </div>
    );
}
