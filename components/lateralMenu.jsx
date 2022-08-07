import React from 'react';
// import { Link } from 'react-router}-dom';

const LateralMenu = () => {
    const style={
    item:'w-full bg-primary   rounded px-1 mb-1 border border-white  text-white hover:text-[#E1B649]  hover:translate-x-3 duration-300'
    } 


    return (
        <div className=''>
            <a href="#inicio">
                <div className={style.item} >Inicio</div>
            </a>
            <a href="#kubics?">
                <div className={style.item}>¿Que es kubics?</div>
            </a>
            <a href="#proyectos">
                <div className={style.item}>Proyectos</div>
            </a>
            <a href="#nosotros">
                <div className={style.item}>Nosotros</div>
            </a>
            <a href="#roadmap">
                <div className={style.item}>Roadmap</div>
            </a>
            <a href="#contacto">
                <div className={style.item}>Contacto</div>
            </a>
        </div>
    );
}

export default LateralMenu;
