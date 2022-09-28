import React from 'react';
import Legendary from './legendary';
import NftCard from "./cardPremium";

const NFTZone = () => {
    const imageCategory = () => {

    }

    return (

        <div className='flex-col  items-center w-11/12 p-6 mb-8 rounded-lg shadow-lg shadow-[#7B94b1] bg-white  border-primary' >
            <h2 className='mb-4 text-3xl '>NFTs</h2>
            {/* ----------- Category Legendary ----------- ) */}
            <div className=''>
                <Legendary />
            </div>
            {/* ----------- ULTRA RARE Categorys ----------- */}
            <div className='mb-6 text-lg border-b may text-secondary'>ULTRA RARE</div>
            <div className='flex flex-row justify-around w-full mb-8 text-justify'>
                {/* <img src='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' /> */}
                <img src='https://kubicsnft.mypinata.cloud/ipfs/QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe/5.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' />
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className='flex items-center h-full w-44'>
                        <button className="mb-4 shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text" translate="no">
                                {/* <FormattedMessage
                            id='nft.buy'
                            defaultMessage='BUY NFT'
                        /> */}
                                BUY
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* ----------- RARE Categorys ----------- */}
            <div className='mb-6 text-lg border-b may text-secondary'>RARE</div>
            <div className='flex flex-row justify-around w-full mb-8 text-justify'>
                {/* <img src='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' /> */}
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className='flex items-center h-full w-44'>
                        <button className="mb-4 shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text" translate="no">
                                {/* <FormattedMessage
                            id='nft.buy'
                            defaultMessage='BUY NFT'
                        /> */}
                                BUY
                            </span>
                        </button>
                    </div>
                </div>
                <img src='https://kubicsnft.mypinata.cloud/ipfs/QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA/100.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' />
            </div>
            {/* ----------- Categorys 2----------- */}
            <div className='mb-6 text-lg border-b may text-secondary'>UNCOMMON</div>
            <div className='flex flex-row justify-around w-full mb-8 text-justify'>
                {/* <img src='https://kubicsnft.mypinata.cloud/ipfs/QmWBWUpMCkqFoWb9QmLwVo3qKxoY1om1aBc6QtUUDui2Y1/1006.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' /> */}
                <NftCard
                    id='0'
                    image='https://kubicsnft.mypinata.cloud/ipfs/QmWBWUpMCkqFoWb9QmLwVo3qKxoY1om1aBc6QtUUDui2Y1/1006.png'
                    title='NFT Dragonkeeper Legendary 0'
                    description="DragonKeeper NFT collection"
                    price='0.1'
                />
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    {/* <div className='flex items-center h-full w-44'>
                        <button className="mb-4 shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text" translate="no">
                                {/* <FormattedMessage
                            id='nft.buy'
                            defaultMessage='BUY NFT'
                        /> */}
                                {/* BUY */}
                            {/* </span>
                        </button>
                    </div> */} 
                </div>
            </div>

            {/* ----------- Categorys 3----------- */}
            <div className='mb-6 text-lg border-b may text-secondary'>COMMON</div>
            <div className='flex flex-row justify-around w-full mb-8 text-justify'>
                {/* <img src='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' /> */}
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className='flex items-center h-full w-44'>
                        <button className="mb-4 shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text" translate="no">
                                {/* <FormattedMessage
                            id='nft.buy'
                            defaultMessage='BUY NFT'
                        /> */}
                                BUY
                            </span>
                        </button>
                    </div>
                </div>
                <img src='https://kubicsnft.mypinata.cloud/ipfs/QmTTYqyXV9vpgwtvn9EeknNAuGqMScyf666GpzXDJrMHtz/2508.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' />
            </div>
        </div>

    );
}

export default NFTZone;
