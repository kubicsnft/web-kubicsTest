import React from "react";
import dynamic from 'next/dynamic'
import AppLayoutHead from '../components/layout/AppLayoutHead'
import LateralMenu from '../components/lateralMenu'
import SocialNetworks from '../components/SocialNetworks'
import Nosotros from '../components/home/nosotros'
import Roadmap from '../components/home/roadmap'
import WhayIsKubics from '../components/home/whayIsKubics'
import MenuMovil from "../components/MenuMovil";
import Cube3d from "../components/cube3d";
import Carrusel1 from "../components/whitOut_using/carousel";



// Importación dinamica de carrusel3d
const CarruselPro = dynamic(() => import('../components/carrusel3d/carruselPro'), { ssr: false })

const style = {
  section: 'w-full  sm:px-4 md:px-6 xl:px-10  border-b flex flex-col items-center  text-center bord bg-[#ffffffd8]  pb-8 min-h-[45em]     max-w-screen-2xl    z-10',
  titulo: 'mt-4 mb-6 text-3xl pt-14 sm-p-3 text-primary',
  // separador: 'h-2  w-full bg-primary border-primary ',
}

export default function Home() {
  return (
    <>
      <AppLayoutHead>
      
        {/*================= Menú lateral y redes sociales =================*/}
        <MenuMovil />
        <div className='hidden xl:flex   relative  justify-between w-full max-w-[100em]  pr-24 z-50'>
          <div>
            <div className='fixed -ml-8 bottom-10'><LateralMenu /></div>
          </div>
          <div>
            <div className='fixed w-32 -mr-2 bottom-10'><SocialNetworks /></div>
          </div>
          
        </div>
        
        {/*========================= Contenedor =============================*/}
        <div className='flex justify-center '>
          <div className='flex flex-col items-center w-full bg-white md:w-11/12 xl:w-10/12 shadow-gray-500'>
            {/*================= Sectión1: =================*/}
            <div  className={style.section}>
              <h2 id='kubics?' className={style.titulo}>¿ QUÉ ES <span className="may" translate='no'>KUBICS</span> ?</h2>
              <WhayIsKubics />
            </div>
            {/*================= Section 2: =================*/}
            <div  className={style.section}>
              {/* <Proyectos /> */}
              <div className={style.separador}></div>
              <div>
                <h2 id='proyectos' className={style.titulo}>PROYECTOS</h2>
              </div>
              <div className='grid items-center w-5/12 h-full sm:w-10/12 md:w-9/12'>
                <div className="">
                  <CarruselPro />
                </div>
                {/* <div className="sm:hidden ">
                  <Carrusel1 />
                </div> */}
              </div>
            </div>
            {/*================= Section 3: ================= */}
            <div className={style.section}>
              <div className={style.separador}></div>
              <h2 id='nosotros' className={style.titulo}>EL EQUIPO</h2>
              <Nosotros />
            </div>
            {/*================= Section 4: ===================*/}
            <div className={style.section}>
              <div className={style.separador}></div>
              <h2 id='roadmap' className={style.titulo}>ROADMAP</h2>
              <Roadmap />
            </div>
          </div>
        </div>
      </AppLayoutHead>
    </>
  )
}
