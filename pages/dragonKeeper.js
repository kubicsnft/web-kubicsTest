import React from 'react';
import dynamic from 'next/dynamic'
import { FormattedMessage } from 'react-intl';
import AppLayout from '../components/layout/AppLayout';
import Swich from '../components/toggleSwitch';
import { BiArrowBack } from 'react-icons/bi'
import ReactPlayer from 'react-player';
import Roadmap from '../components/home/roadmap'
// import Carrusel3d from '../components/carrusel3d/carrusel3d'
import Image from 'next/image'
import Cube from '../components/cube';
import { Link } from 'react-router-dom';


const style = {
    // shadow-lg bg-white
    // kubics : ' w-9/12 min-h-screen px-16 py-4 text-center border-b-2 border-primary ',
    section: 'w-full sm:w-10/12 text-center py-12 sm:py-4 flex flex-col items-center max-w-screen-2xl h-full  bg-white shadow-2xl shadow-gray-500 z-10 ',
    separador: 'h-1  w-4/5 border-b-2 border-primary',
}


const Carrusel3d =dynamic(()=>import('../components/carrusel3d/carrusel3d'),{ssr:false})

const Proyecto = () => {
    return (
        <>
            <AppLayout>

                <div className='flex justify-center w-full '>
                    <div className={style.section}>
                        {/* buttoms */}
                        <div className='grid items-center w-full grid-cols-2' >
                            <div className="text-lg text-start">
                                {/* <Link url='/index'> */}
                                <a src='../pages/index.js'
                                    
                                    
                                >
                                
                                    <div className='w-8 p-1 ml-4 text-xl text-center transition duration-300 ease-in-out border-2 rounded-full border-primary text-secondary hover:-translate-x-2'>
                                        <BiArrowBack />
                                    </div>
                                </a>
                                {/* </Link> */}
                            </div>
                            <div className="flex justify-end">
                                <Swich />
                            </div>
                        </div>
                        {/* Img - Title */}
                        <div className='flex justify-center w-full mb-2'>
                            <img
                                className=''
                                src="titulo.png"
                                alt="Título película"
                                width={350}
                            />
                        </div>
                        {/* Video */}
                        <div className='flex flex-col items-center w-4/5 p-2 border-t-2 border-b-2 border-primary'>
                            <div className='flex justify-center w-full '>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=UYNH-_3SEPg'
                                    controls
                                // width='100%'
                                // height='100%'
                                />
                            </div>
                            {/* Sinopsis */}
                            <div className='w-full text-justify '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>

                        {/* NFT */}
                        <div className='flex-col mt-8 items-center w-4/5 p-6 mb-8 rounded-xl shadow-lg shadow-[#7094b1] bg-gray-100  border-primary' >
                            <h2 className='mb-8 text-3xl '>NFT'S</h2>
                            <div className=''>
                            <div>Category A</div>
                                <Carrusel3d />
                            </div>
                            <div className='flex flex-row justify-between mt-24'>
                                <div className='w-44 h-44'>
                                <div>Category B</div>
                                <Cube link='./test' img='/nft/dragon1.png' />
                                </div>
                                <div className='w-44 h-44'>
                                <div>Category C</div>
                                <Cube link='./test' img='/nft/dragon2.png' />
                                </div>
                                <div className='w-44 h-44'>
                                <div>Category D</div>
                                <Cube link='./test' img='/nft/dragon3.png' />
                                </div>
                                <div className='w-44 h-44'>
                                <div>Category E</div>
                                <Cube link='./test' img='/nft/dragon4.png' />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between mt-24'>
                                <div className='w-56 cursor-pointer box'><img src='/nft/dragon2.png' className='object-cover duration-150 ease-in ef-img' /></div>
                                <div className='w-56 cursor-pointer box'><img src='/nft/dragon1.png' className='object-cover duration-150 ease-in ef-img' /></div>
                                <div className='w-56 cursor-pointer box'><img src='/nft/dragon3.png' className='object-cover duration-150 ease-in ef-img' /></div>
                                <div className='w-56 cursor-pointer box'><img src='/nft/dragon4.png' className='object-cover duration-150 ease-in ef-img' /></div>
                            </div>
                            <div className='flex flex-row justify-between mt-24'>
                                <div className='w-52 py-8 border-2 rounded-lg cursor-pointer bg-gradient-to-r from-[#7094b1] via-gray-200 to-[#7094b1] border-primary box'>
                                    
                                    <img src='/nft/dragon2.png' className='object-cover mb-8 duration-150 ease-in ef-img' />
                                    <div className='flex flex-col ml-3 text-white text-start'>
                                        <p>Category</p>
                                        <p>price</p>
                                    </div>
                                </div>
                                <div className='w-52 py-8 border-2 rounded-lg cursor-pointer bg-gradient-to-r from-[#7094b1] via-gray-200 to-[#7094b1] border-primary box'>
                                    <img src='/nft/dragon1.png' className='object-cover mb-8 duration-150 ease-in ef-img' />
                                    <div className='flex flex-col ml-3 text-white text-start'>
                                        <p>Category</p>
                                        <p>price</p>
                                    </div>
                                </div>
                                <div className='w-52 py-8 border-2 rounded-lg cursor-pointer bg-gradient-to-r from-[#7094b1] via-gray-200 to-[#7094b1] border-primary box'>
                                    <img src='/nft/dragon3.png' className='object-cover mb-8 duration-150 ease-in ef-img' />
                                    <div className='flex flex-col ml-3 text-white text-start'>
                                        <p>Category</p>
                                        <p>price</p>
                                    </div>
                                </div>
                                <div className='w-52 py-8 border-2 rounded-lg cursor-pointer bg-gradient-to-r from-[#7094b1] via-gray-200 to-[#7094b1] border-primary box'>
                                    <img src='/nft/dragon4.png' className='object-cover mb-8 duration-150 ease-in ef-img' />
                                    <div className='flex flex-col ml-3 text-white text-start'>
                                        <p>Category</p>
                                        <p>price</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.separador}></div>
                        <div>
                            <h2 className='py-6 mb-8 text-3xl'>ROADMAP PROYECTO</h2>
                            <Roadmap />
                        </div>
                        <div>
                            <h2 className='mt-8 mb-8 text-3xl'>PROYECTO</h2>

                        </div>
                    </div>
                </div>

            </AppLayout>
        </>
    );
}

export default Proyecto;
