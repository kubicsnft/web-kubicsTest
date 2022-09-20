import React from 'react';
import Cube from '../cube';

const Nosotros = () => {





    return (
        <>
            <div className='flex flex-wrap items-start justify-around w-full h-full felx-row sm:px-8 '>
                
                    <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                        <div className='flex justify-center mb-4 w-52 h-52'>
                            <Cube link='./test' img='/team/Salvador.jpg' />
                        </div>
                        <p className='text-lg text-secondary may'>Salvador</p>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                        <div className='flex justify-center mb-4 w-52 h-52'>
                            <Cube link='./test' img='/team/Pedro.jpg' />
                        </div>
                        <p className='text-lg text-secondary may'>Pedro</p>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                
                    <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                        <div className='flex justify-center mb-4 w-52 h-52 backdrop-grayscale'>
                            <Cube link='./test' img='/team/Miguel.jpeg' />
                        </div>
                        <p className='text-lg text-secondary may'>Miguel</p>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                        Desarrollador blockchain. Varios años de experiencia coordinando proyectos IT en diferentes países como Alemania, España, Reino Unido, Finlandia o Sudáfrica.                         </div>
                    </div>
            </div>
        </>
    );
}

export default Nosotros;
