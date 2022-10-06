import React from 'react';
import Carousel_Legend from './Carousel_legendary';
import NftCard from "./Card_Legendary";
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';



const imageUltra = () => {


    return 'https://kubicsnft.mypinata.cloud/ipfs/QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe/5.png'
    // return 'https://kubicsnft.mypinata.cloud/ipfs/QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA/100.png'
}

const NFTZone = () => {



    return (

        <div className='flex-col  p-12 items-center w-11/12  mb-8 rounded-lg border-2 shadow-lg shadow-[#7B94b1] bg-[#ffffff]  border-primary' >
            <h2 className='mb-4 text-3xl'>NFTs</h2>
            {/* --------- Description --------- */}
            <div className='mb-8 text-justify ' >
                <FormattedMessage
                    id='nft.description'
                    default='description'
                />
                <p className='mt-4'>
                    <FormattedMessage
                        id='nft.description2'
                        default='description'
                    />
                </p>
            </div>
            {/* =========================== Category Legendary =========================== ) */}
            <div className='mb-32'>
                <Carousel_Legend />
            </div>
            {/* =========================== ULTRA RARE Categorys =========================== */}
            <div className='flex flex-row justify-around w-full gap-10 p-4 mb-20 text-justify rounded-lg shadow-md'>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg borer-[#d70808] w-96'>
                    <Image
                        className="w-full rounded-md"
                        src={imageUltra()}
                        alt='nft image'
                        layout="responsive"
                        width={360}
                        height={268}
                    />
                    <div className='flex flex-row justify-between w-full p-2'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Ultra Rare</h3>
                            {/* <p className='text-sm text-start'>{props.description}</p> */}

                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.001
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-start w-7/12 justify-'>
                    <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>ULTRA RARE</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li><FormattedMessage id='nft.ultrarare1' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare2' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare3' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare4' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare5' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare6' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare7' default='description' /></li>
                    </ul>
                    <div className='flex items-center mt-4 w-44'>
                        <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* =========================== RARE Category =========================== */}
            <div className='flex flex-row justify-around w-full p-4 mb-20 text-justify rounded-lg shadow-md'>
            {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div className='flex flex-col items-start justify-center w-full mb-8'>
                        <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>RARE</div>
                        <ul className='ml-8 list-disc text-start'>
                            <li><FormattedMessage id='nft.rare1' default='description' /></li>
                            <li><FormattedMessage id='nft.rare2' default='description' /></li>
                            <li><FormattedMessage id='nft.rare3' default='description' /></li>
                            <li><FormattedMessage id='nft.rare4' default='description' /></li>
                            <li><FormattedMessage id='nft.rare5' default='description' /></li>
                            <li><FormattedMessage id='nft.rare6' default='description' /></li>
                        </ul>
                        <div className='flex items-center mt-4 ml-2 w-44'>
                            <button className="bg-white shadow-lg button learn-more" onClick='' >
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text " translate="no">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT CARD ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg borer-[#d70808] w-96'>
                    <Image
                        className="w-full rounded-md"
                        src='https://kubicsnft.mypinata.cloud/ipfs/QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA/100.png'
                        alt='nft image'
                        layout="responsive"
                        width={360}
                        height={268}
                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Rare 000</h3>
                            {/* <p className='text-sm text-start'>{props.description}</p> */}
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== UNCOMMON Category =========================== */}
            <div className='flex flex-row justify-around w-full gap-10 p-4 mb-20 text-justify rounded-lg shadow-md'>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg borer-[#d70808] w-96'>
                    <Image
                        className="w-full rounded-md"
                        src='https://kubicsnft.mypinata.cloud/ipfs/QmWBWUpMCkqFoWb9QmLwVo3qKxoY1om1aBc6QtUUDui2Y1/1003.png'
                        alt='nft image'
                        layout="responsive"
                        width={360}
                        height={268}
                    />
                    <div className='flex flex-row justify-between w-full p-2'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Uncommon</h3>
                            {/* <p className='text-sm text-start'>{props.description}</p> */}

                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.001
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-start w-7/12 justify-'>
                    <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>UNCOMMON</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li><FormattedMessage id='nft.ultrarare1' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare2' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare3' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare4' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare5' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare6' default='description' /></li>
                        <li><FormattedMessage id='nft.ultrarare7' default='description' /></li>
                    </ul>
                    <div className='flex items-center mt-4 w-44'>
                        <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* =========================== COMMON Category =========================== */}
            <div className='flex flex-row justify-around w-full p-4 text-justify rounded-lg shadow-md'>
            {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div className='flex flex-col items-start justify-center w-full mb-8'>
                        <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>RARE</div>
                        <ul className='ml-8 list-disc text-start'>
                            <li><FormattedMessage id='nft.rare1' default='description' /></li>
                            <li><FormattedMessage id='nft.rare2' default='description' /></li>
                            <li><FormattedMessage id='nft.rare3' default='description' /></li>
                            <li><FormattedMessage id='nft.rare4' default='description' /></li>
                            <li><FormattedMessage id='nft.rare5' default='description' /></li>
                            <li><FormattedMessage id='nft.rare6' default='description' /></li>
                        </ul>
                        <div className='flex items-center mt-4 ml-2 w-44'>
                            <button className="bg-white shadow-lg button learn-more" onClick='' >
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text " translate="no">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT CARD ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg borer-[#d70808] w-96'>
                    <Image
                        className="w-full rounded-md"
                        src='https://kubicsnft.mypinata.cloud/ipfs/QmTTYqyXV9vpgwtvn9EeknNAuGqMScyf666GpzXDJrMHtz/995.png'
                        alt='nft image'
                        layout="responsive"
                        width={360}
                        height={268}
                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Rare 000</h3>
                            {/* <p className='text-sm text-start'>{props.description}</p> */}
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NFTZone;
