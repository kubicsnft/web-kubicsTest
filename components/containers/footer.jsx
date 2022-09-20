import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo_loop_SO.gif'
import Newsletters from '../Newsletter';
import SocialNetworks from '../SocialNetworks';

const style = {
    container: '',
    header: 'mb-8 mt-4 text-3xl',
    wraaper: 'h-4/5 w-full grid content-between w-full',

}

const Footer = () => {
    return (
        <>
            <h2 className={style.header}>CONTACTO</h2>
            <div className={style.wraaper}>
                <div></div>
                <div className='grid content-between text-center'>
                    <div className='md:hidden'>
                        <Image src={logo} width={124} height={110} alt="logo" />
                    </div>
                    <div className='hidden md:block'>
                        <Image src={logo} width={144} height={130} alt="logo" />
                    </div>
                    <div className='flex flex-col items-center self-center mt-4 justify-self-center'>
                        <div className='mb-2 text-lg '>info@kubics.com</div>
                        <div className='mb-4 text-lg '>submit_project@kubics.com</div>
                        <SocialNetworks color='bg-white' text='text-primary' />
                    </div>
                </div>


                <div className='w-full justify-self-center '>
                    <Newsletters color='butt-color2' />
                </div>
            </div>
        </>
    );
}

export default Footer;
