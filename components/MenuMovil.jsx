import React, { useState } from 'react'
import Link from 'next/link'
import SocialNetworks from './SocialNetworks'



function MobileNav({ open, setOpen }) {
    return (
        <div className={`xl:hidden absolute backdrop-blur-3xl top-0 left-0 h-auto pb-4 w-full sm:w-80 border z-50 shadow-slate-400 shadow-xl transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col items-center   shadow-md  shadow-[#7B94b1] bg-[#c0d0d2ba] h-16 ">
                <div className='flex flex-row items-center justify-center h-full mt-2 text-2xl may'>
                    <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>K</div>
                    <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>U</div>
                    <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>B</div>
                    <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>I</div>
                    <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>C</div>
                    <div className='duration-300 hover:-translate-y-3'>S</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center px-4 mt-8">
                {/* Pages Links  */}
                <div className='text-center '>
                    <Link href="#inicio" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Inicio</div>
                    </Link>
                    <Link href="#kubics?">
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>¿Que es kubics?</div>
                    </Link>
                    <Link href="#proyectos" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Proyectos</div>
                    </Link>
                    <Link href="#nosotros" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Nosotros</div>
                    </Link>
                    <Link href="#roadmap" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Roadmap</div>
                    </Link>
                    <Link href="#contacto" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Contacto</div>
                    </Link>
                    <Link href="#nosotros" >
                        <div className=' bg-primary cursor-pointer rounded  w-40 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300' onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Nuevo</div>
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
        <div className='w-full px-[1.2rem] h-[66px] lg:h-auto pt-[0.9rem] flex justify-start left-0  fixed top-0 z-40'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className='z-50 flex items-start h-full mt-1 mr-4'>
                <div className="z-50 flex flex-col items-center justify-between w-8 h-8 cursor-pointer backdrop-blur-3xl xl:hidden" onClick={() => {
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
