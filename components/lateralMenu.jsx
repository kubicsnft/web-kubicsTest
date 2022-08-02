import React from 'react';
import { Link } from 'react-router-dom';

const LateralMenu = () => {
    const style={
    item:'w-full bg-primary   rounded px-1 mb-1 border border-white  text-white hover:text-[#EFEDA5]  hover:translate-x-3 duration-300'
    } 


    return (
        <div className=''>
            <Link href="#inicio">
                <div className={style.item} >Inicio</div>
            </Link>
            <Link href="#kubics?">
                <div className={style.item}>¿Que es kubics?</div>
            </Link>
            <Link href="#proyectos">
                <div className={style.item}>Proyectos</div>
            </Link>
            <Link href="#nosotros">
                <div className={style.item}>Nosotros</div>
            </Link>
            <Link href="#roadmap">
                <div className={style.item}>Roadmap</div>
            </Link>
            <Link href="#contacto">
                <div className={style.item}>Contacto</div>
            </Link>
        </div>
    );
}

export default LateralMenu;
