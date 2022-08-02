import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';

const SocialNetworks = (props) => {

    var color = 'bg-[#7094b1]'
    var text = 'text-white'

    if (props.color)
        color = props.color
    if (props.text)
        text = props.text


    const style = {
        icono: 'text-2xl p-1 flex justify-center border border-white rounded   hover:text-[#EFEDA5] transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-100 duration-500',
    }

    style.icono = style.icono + color

    return (
        <div className='w-full'>
            <div className='flex flex-row justify-between w-full '>
                <a href="https://mobile.twitter.com/KubicsNFT">
                    <div className={`${style.icono} ${color} ${text} `} >
                        <AiOutlineTwitter />
                    </div>
                </a>
                <a href="https://www.instagram.com/kubicsnft/">
                    <div className={`${color} ${text} ${style.icono} `} >
                        <SiDiscord />
                    </div>
                </a>
                <a href="https://www.instagram.com/kubicsnft/">
                    <div className={`${color} ${text} ${style.icono}`} >
                        <AiFillInstagram />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SocialNetworks;
