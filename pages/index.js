import React, { Component} from "react";
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import AppLayoutHead from '../components/layout/AppLayoutHead'
import LateralMenu from '../components/lateralMenu'
import SocialNetworks from '../components/SocialNetworks'
import Cube from '../components/cube'
import Proyectos from '../components/home/proyectos'
import Nosotros from '../components/home/nosotros'
import Roadmap from '../components/home/roadmap'
import WhayIsKubics from '../components/home/whayIsKubics'
// import Carrusel from '../components/carousel'
// import CarruselPro from '../components/carrusel3d/carruselPro'
import Header from '../components/containers/header'


const style = {
  // shadow-lg bg-white
  // kubics : ' w-9/12 min-h-screen px-16 py-4 text-center border-b-2 border-primary ',
  section: 'w-full  flex flex-col items-center  text-center border-dotted min-h-[45em]  sm:max-h-[55em] sm:h-screen max-w-screen-2xl h-full  bg-white  z-10',
  // sectionLast: 'w-full   text-center py-4  sm:min-h-screen sm:max-h-[55em] sm:h-screen  bg-white  max-w-screen-2xl hidden md:block z-10',
  separador: 'h-1  w-4/5 border-b-2 border-primary',
}

const CarruselPro =dynamic(()=>import('../components/carrusel3d/carruselPro'),{ssr:false})

export default function Home() {
  return (
    <>
      <AppLayoutHead>
        {/* Menú lateral y redes sociales */}
        <div className='hidden xl:flex  relative  justify-between w-full max-w-[100em] pl-2 pr-36 z-50'>
          <div>
            <div className='fixed bottom-10'><LateralMenu /></div>
          </div>
          <div>
            <div className='fixed w-32 bottom-10'><SocialNetworks /></div>
          </div>
        </div>
        {/* Contenedor */}
        <div className='flex justify-center'>
          <div className='grid w-full bg-white shadow-2xl md:w-11/12 xl:w-9/12 shadow-gray-500 justify-items-center'>
            {/*Sectión1: Qué es kubics?? */}
            <div id='kubics?' className={style.section}>
              <WhayIsKubics />
            </div>
            {/*Section 2: Proyectos */}
            <div id='proyectos' className={style.section}>
              {/* <Proyectos /> */}
              <div className={style.separador}></div>
              <h2 className='mt-4 mb-6 text-3xl '>PROYECTOS</h2>
              <div className='grid items-center w-3/5 h-full '>
                <CarruselPro />
              </div>
            </div>
            {/*Section 3: Nosotros */}
            <div id='nosotros' className={style.section}>
              <div className={style.separador}></div>
              <Nosotros />
            </div>
            {/*Section 4: Roadmap */}
            <div id='roadmap' className={style.section}>
              <div className={style.separador}></div>
              <h2 className='mt-4 mb-8 text-3xl'>ROADMAP</h2>
              <Roadmap />
            </div>
          </div>
        </div>
      </AppLayoutHead>
    </>
  )
}
