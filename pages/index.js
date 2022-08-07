
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/layout/AppLayout'
import LateralMenu from '../components/lateralMenu'
import SocialNetworks from '../components/SocialNetworks'
import Cube from '../components/cube'
import Proyectos from '../components/containers/home/proyectos'
import Nosotros from '../components/containers/home/nosotros'
import Roadmap from '../components/containers/home/roadmap'
import WhayIsKubics from '../components/containers/home/whayIsKubics'
import Carrusel from '../components/carousel'


const style = {
  // shadow-lg bg-white
  // kubics : ' w-9/12 min-h-screen px-16 py-4 text-center border-b-2 border-primary ',
  section: 'w-11/12 xl:w-9/12 text-center py-12 sm:py-4  border-b border-primary sm:min-h-screen max-w-screen-2xl h-full  bg-white shadow-2xl shadow-gray-500 z-10',
  sectionLast: 'w-11/12 xl:w-9/12 text-center py-4  sm:min-h-screen  bg-white shadow-2xl shadow-gray-500 max-w-screen-2xl hidden md:block z-10',

}

export default function Home() {
  return (
    <>
      <AppLayout>
        {/* Menú lateral y redes sociales */}

        <div className='hidden xl:flex  relative  justify-between w-full max-w-[100em] pl-2 pr-36 z-50'>
          <div>
            <div className='fixed bottom-10'><LateralMenu /></div>
          </div>
          <div>
            <div className='fixed w-32 bottom-10'><SocialNetworks /></div>
          </div>
        </div>


        <div>
          <div className='grid justify-items-center'>
            {/*Sectión1: Qué es kubics?? */}
            <div id='kubics?' className={style.section}>
              <WhayIsKubics />
            </div>
            {/*Section 2: Proyectos */}
            <div id='proyectos' className='z-10 flex justify-center w-11/12 py-4 text-center bg-white border-b shadow-2xl sm:min-h-screen xl:w-9/12 border-primary shadow-gray-500'>
              {/* <Proyectos /> */}
              <div className=''>
                <h2 className='text-3xl '>PROYECTOS</h2>
                <div className='grid items-center h-full'>
                  <Carrusel />
                </div>
              </div>
            </div>
            {/*Section 3: Nosotros */}
            <div id='nosotros' className={style.section}>
              <Nosotros />

            </div>
            {/*Section 4: Roadmap */}
            <div id='roadmap' className={style.sectionLast}>
              <h2 className='mb-8 text-3xl'>ROADMAP</h2>
              <Roadmap />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
