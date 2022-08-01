import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import Cube from './cube';

const Carrusel = () => {
    return (
        <div className='w-9/12 bg-red-400 '>
            <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={4} step={2} infinite={true}>
                <div className="relative flex items-center justify-center ">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>


                            <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out md:gap-6 gap-14 ">
                                <Slide index={0}>
                                
                                    <div className="flex overflow-hidden ">
                                        <Cube link='./test' />
                                    </div>
                                
                                </Slide>
                                
                                <Slide index={1}>
                                    
                                        <div className="flex overflow-hidden">
                                            <Cube link='./test' />
                                        </div>
                                    
                                </Slide>
                                <Slide index={2}>
                                    
                                        <div className="flex overflow-hidden ">
                                            <Cube link='./test' />
                                        </div>
                                    
                                </Slide>
                                <Slide index={3}>
                                    
                                        <div className="flex overflow-hidden ">
                                            <Cube link='./test' />
                                        </div>
                                    
                                </Slide>
                                <Slide index={4}>
                                    
                                        <div className="flex overflow-hidden ">
                                            <Cube link='./test' />
                                        </div>
                                    
                                </Slide>
                                <Slide index={5}>
                                    
                                        <div className="flex overflow-hidden">
                                            <Cube link='./test' />
                                        </div>
                                    
                                </Slide>

                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 p-3 border-2 rounded-full border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider className="hidden lg:hidden md:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2} step={1} infinite={true}>
                <div className="relative flex items-center justify-center w-full">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                <Slide index={0}>

                                </Slide>
                                <Slide index={1}>

                                </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/baSBMDJLZbfPhzsvZSPYw_13tDuHGHP2Vg2lFClGjkZ6i2w0b2upSmIkahAYMY6DaioA98QpTpffQei_GFkhQ3PDcOvkRuPFaWYS=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/POLYGON-0xb9cdd98cdd2d7520b4c91780628994ae5093ecf6:8932/e9d09aee" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x09233d553058c2f42ba751c87816a8e9fae7ef10:8524/1297d20d" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src=" https://lh3.googleusercontent.com/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ=s130 " alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={5}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/baSBMDJLZbfPhzsvZSPYw_13tDuHGHP2Vg2lFClGjkZ6i2w0b2upSmIkahAYMY6DaioA98QpTpffQei_GFkhQ3PDcOvkRuPFaWYS=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={6}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:52204/6598b044" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x09233d553058c2f42ba751c87816a8e9fae7ef10:8524/1297d20d" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={7}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src=" https://lh3.googleusercontent.com/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ=s130 " alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={8}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/baSBMDJLZbfPhzsvZSPYw_13tDuHGHP2Vg2lFClGjkZ6i2w0b2upSmIkahAYMY6DaioA98QpTpffQei_GFkhQ3PDcOvkRuPFaWYS=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={9}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src=" https://lh3.googleusercontent.com/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ=s130 " alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={10}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://lh3.googleusercontent.com/baSBMDJLZbfPhzsvZSPYw_13tDuHGHP2Vg2lFClGjkZ6i2w0b2upSmIkahAYMY6DaioA98QpTpffQei_GFkhQ3PDcOvkRuPFaWYS=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={11}>
                                    <div className="flex flex-col h-full rounded-xl">
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:52204/6598b044" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                        <div className="relative flex w-full h-64 mb-8 overflow-hidden rounded-xl">

                                            {/* -----------nft or image you want to show----------- */}
                                            <img src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x09233d553058c2f42ba751c87816a8e9fae7ef10:8524/1297d20d" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-110" />

                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                                <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 p-3 border-2 rounded-full border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider className="block mt-16 md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                <div className="relative flex items-center justify-center w-full">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 p-3 border-2 rounded-full cursor-pointer border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="flex items-center justify-center w-full h-full transition duration-700 ease-out">
                                <Slide index={0}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:52204/6598b044" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={1}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={2}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={3}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/POLYGON-0xb9cdd98cdd2d7520b4c91780628994ae5093ecf6:8932/e9d09aee" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={4}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={5}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={6}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:52204/6598b044" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={7}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={8}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={9}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/-q8k-XMEMwqQ6bYSU5aY__u5TSHrV64xZw-UqsGkD8wrpJyyYDddcTqwVEwzSu5XPCz0hM84n3gPulXLUZ8Bug4u43q2uTVO1OMAWg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={10}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://lh3.googleusercontent.com/T1y9HIEiQIRrpm0xr8W7mc1hV9Rjwd7x_3RsdERCjpie5MuLwn1PVFVAAWva1QcoIPYn4LdCT3Wf3hXSioEQxfo_ax9flsYVJCB7fg=w361" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>

                                </Slide>
                                <Slide index={11}>

                                    <div className="relative flex w-full h-full mb-8 overflow-hidden rounded-xl">

                                        {/* -----------nft or image you want to show----------- */}
                                        <img src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:52204/6598b044" alt="" className="relative z-10 object-cover w-full duration-300 ease-in rounded-xl hover:scale-105" />

                                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                            <h3 className="relative z-20 mb-2 text-xl font-semibold leading-5 text-white lg:text-xl lg:leading-6">Name NFT</h3>
                                            <h2 className="relative z-20 text-base leading-4 text-white lg:text-lg lg:leading-5">Description</h2>
                                        </div>
                                    </div>


                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 p-3 border-2 rounded-full border-cyan-300 bg-zinc-900 focus:outline-none focus:bg-zinc-700 focus:ring-2" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
}

export default Carrusel;
