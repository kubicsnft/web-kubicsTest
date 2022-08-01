import Image from 'next/image';
import React from 'react';
import logo from '../../public/Kubics.webp'
import SocialNetworks from '../SocialNetworks';

const style = {
    container: '',
    header: 'mb-8 mt-4 text-3xl',
    wraaper: 'h-4/5 max-h-full w-full flex  flex-col justify-center',

}

const Footer = () => {
    return (
        <>
            <h2 className={style.header}>CONTACTO</h2>
            <div className={style.wraaper}>
                <div>
                    <div className='md:hidden'>
                        <Image src={logo} width={124} height={110} alt="logo" />
                    </div>
                    <div className='hidden md:block'>
                        <Image src={logo} width={144} height={130} alt="logo" />
                    </div>
                </div>
                
                <div className='flex flex-col self-center mt-8 w-36'>
                    <div className='mb-4 text-lg'>info@kubics.com</div>
                    <SocialNetworks color='bg-white' text='text-primary'/>
                </div>
            </div>
        </>
    );
}

export default Footer;
