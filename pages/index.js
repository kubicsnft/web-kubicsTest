
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/layout/AppLayout'
import LateralMenu from '../components/LateralMenu'
import SocialNetworks from '../components/SocialNetworks'
import Cube from '../components/cube'
import Proyectos from '../components/containers/home/proyectos'
import Nosotros from '../components/containers/home/nosotros'
import Roadmap from '../components/containers/home/roadmap'
import WhayIsKubics from '../components/containers/home/whayIsKubics'


const style = {
  // shadow-lg bg-white
  // kubics : ' w-9/12 min-h-screen px-16 py-4 text-center border-b-2 border-primary ',
  section : 'w-9/12 text-center py-4 mb-24 border-b-2 border-primary min-h-screen max-h-screen ',
  sectionLast : 'w-9/12 text-center py-4  min-h-screen max-h-screen ',
 
}

export default function Home() {
  return (
    <>
      <AppLayout>
      {/* Menú lateral y redes sociales */}
        <div className='flex justify-center '>
          <div className='fixed bottom-0 flex flex-row items-end justify-between w-full max-w-[100em] px-4 py-16'>
            <div><LateralMenu /></div>
            <div className='w-32'><SocialNetworks /></div>
          </div>
        </div>
        <div className='grid justify-items-center'>
          {/*Sectión1: Qué es kubics?? */}
          <div id='kubics?' className={style.section}>
            <WhayIsKubics/>
          </div>
          {/*Section 2: Proyectos */}
          <div id='proyectos' className={style.section}>
            <Proyectos />
          </div>
          {/*Section 3: Nosotros */}
          <div id='nosotros' className={style.section}>
            <Nosotros />
          </div>
          {/*Section 4: Roadmap */}
          <div id='roadmap' className={style.sectionLast}>
            <h2 className='mb-8 text-3xl'>ROADMAP</h2>
            <Roadmap/>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
