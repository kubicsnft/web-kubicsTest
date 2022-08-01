import Image from 'next/image';
import React, { Component } from 'react'
import logo from '../public/Kubics.webp'


const CenterLogo = () => {

        return (
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col justify-center text-center'>
                    <div>
                    <div className='md:hidden'>
                        <Image  src={logo} width={124} height={110} alt="logo" / >
                    </div>
                    <div className='hidden md:block'>
                        <Image  src={logo} width={144} height={130} alt="logo" / >
                    </div>

                    </div>

                    <div className='flex flex-row justify-center mt-8 text-3xl md:text-5xl may'>
                        <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>K</div>
                        <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>U</div>
                        <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>B</div>
                        <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>I</div>
                        <div className='tracking-[.70em]  hover:-translate-y-3 duration-300'>C</div>
                        <div className='duration-300 hover:-translate-y-3'>S</div>
                    </div>
                </div>
            </div>
        );
}

export default CenterLogo;
