import React, { useState } from 'react'
import Link from 'next/link'
import SocialNetworks from './SocialNetworks'
import Image from 'next/image'



function MobileNav({ open, setOpen }) {
    return (
        <div className={`xl:hidden absolute  backdrop-blur-3xl  top-0 left-0 h-auto pb-4 w-full sm:w-80  z-50 border-b  shadow-slate-400 shadow-xl transform ${open ? "-translate-y-0 mt-4" : "-translate-y-full "} transition-transform duration-500 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col items-center    shadow-[#484848] bg-[#7B94b1] h-16 ">
                <div className='flex flex-row items-center justify-start h-full text-2xl may'>
                    {/* <Image src='/logos/logo_primary.png' alt='logo' width={66} height={57}/> */}
                    <Image src='/logos/logo_letras_blanco.png' alt='logo' width={200} height={79}/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center px-4 mt-8 ">
                {/* Pages Links  */}
                <div className='text-center '>
                    <Link href="#inicio" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Inicio</div>
                    </Link>
                    <Link href="#kubics?">
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>¿Que es kubics?</div>
                    </Link>
                    <Link href="#proyectos" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Proyectos</div>
                    </Link>
                    <Link href="#nosotros" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Nosotros</div>
                    </Link>
                    <Link href="#roadmap" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Roadmap</div>
                    </Link>
                    <Link href="#contacto" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Contacto</div>
                    </Link>
                    <Link href="#nosotros" >
                        <div className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Nuevo</div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center mt-8 '>
                <div className='w-44'><SocialNetworks /></div>
            </div>
        </div>
    )
}


const MenuMovil = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`sm:w-auto w-full  px-[1.2rem] h-[70px] lg:h-auto pt-[0.9rem] flex justify-start left-0  fixed -top-4 z-40 ${open ? "bg-white" : "backdrop-blur-3xl sm:backdrop-blur-none"} ` } >
            <MobileNav open={open} setOpen={setOpen} />
            <div className='z-50 flex items-start h-full mt-4 mr-4'>
                <div className="z-50 flex flex-col items-center justify-between w-8 h-8 cursor-pointer sm:backdrop-blur-3xl xl:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
        </div>
    );
}

export default MenuMovil;
