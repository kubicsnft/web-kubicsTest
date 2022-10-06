import Image from 'next/image';
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
// import { FormattedMessage } from 'react-intl';



function cardPremium(props) {

    return (
        <div className="  bg-white p-1 flex flex-col items-cener rounded-lg shadow-md box  border-primary shadow-[#7B94b1] -primary w-96">
            <Image
                className="w-full rounded-md"
                key={props.id}
                src={props.image}
                alt='nft image'
                width={300}
                height={282}
            />

            <div className='flex flex-row justify-between w-full p-2 text-primary'>

                <div className="flex flex-col items-start justify-between gap-2">
                    <h3 className="font-bold ">{props.title}</h3>
                    {/* <p className='text-sm text-start'>{props.description}</p> */}
                    <div className='w-44'>
                        <button className="text-sm shadow-md button learn-more" onClick={() => addToWhitelist()}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text" translate="no">
                                Buy Now
                            </span>
                        </button>
                    </div>
                </div>
                <div className=' text-start'>
                    <p>Price</p>
                    <p className='flex flex-row items-center ' >
                        <FaEthereum />{props.price}
                    </p>
                </div>
            </div>

        </div>
    );
};



export default cardPremium
