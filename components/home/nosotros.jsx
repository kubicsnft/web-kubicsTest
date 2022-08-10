import React from 'react';
import Cube from '../cube';

const Nosotros = () => {





    return (
        <>
            <h2 className='mt-4 text-3xl'>NOSOTROS</h2>
            <div className='flex flex-wrap items-center justify-between h-full felx-row '>
                <div className='flex flex-wrap items-center justify-around w-full mb-12 sm:w-6/12 sm:felx-row'>
                    <div className='flex flex-col justify-center w-56 p-2 mb-4'>
                        <div className='flex justify-center mb-4'>
                            <Cube link='./test' img='/avatar.png' />
                        </div>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-xl sm:mt-8 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-56 p-2 mb-4'>
                        <div className='flex justify-center mb-4'>
                            <Cube link='./test' img='/avatar.png' />
                        </div>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-xl sm:mt-8 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-around w-full mb-12 sm:w-6/12 felx-row'>
                    <div className='flex flex-col justify-center w-56 p-2 mb-4'>
                        <div className='flex justify-center mb-4 '>
                            <Cube link='./test' img='/avatar.png' />
                        </div>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-xl sm:mt-8 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-56 p-2 mb-4'>
                        <div className='flex justify-center mb-4'>
                            <Cube link='./test' img='/avatar.png' />
                        </div>
                        <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-xl sm:mt-8 md:sm-48 bg-primary'>
                            Lorem Ipsum is simply dummy text of the  ever since the 1500s,Lorem Ipsum is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nosotros;
