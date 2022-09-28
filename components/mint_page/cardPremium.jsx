import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';



function cardPremium(props) {

    return (
        <div className="  bg-white  flex flex-col items-center rounded-md shadow-lg box  shadow-[#7B94b1] -primary w-96">
            <img className="w-full rounded-t-md" key={props.id} src={props.image}></img>

            <div className='flex flex-row justify-between w-full p-2'>
                
                <div className=" text-start">
                    <h3 className="font-bold">{props.title}</h3>
                    <p className='text-sm text-start'>{props.description}</p>
                </div>
                <div className=' text-start'>
                    <p>Price</p>
                    <p className='flex flex-row items-center' >
                        <FaEthereum />{props.price}
                    </p>
                </div>
            </div>
            <div className='w-52'>
                <button className="mb-4 text-sm shadow button learn-more" onClick={() => addToWhitelist()}>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text" translate="no">
                        {/* <FormattedMessage
                            id='nft.buy'
                            defaultMessage='BUY NFT'
                        /> */}
                        BUY NOW
                    </span>
                </button>
            </div>
        </div>
    );
};



export default cardPremium
