import React from 'react';
import Legendary from './legendary';
import NftCard from "./cardPremium";
import { useEffect, useState } from "react";
import Link from "next/link"
import axios from "axios";
import { ethers } from "ethers";
import { dragonKeeper } from "../../constants";
import DragonKeeper from "../../artifacts/contracts/DragonKeeper.sol/DragonKeeper.json";
//import { fetchData } from "../../pages/api/ReadData";

const NFTZone = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [signer, setSigner] = useState(undefined);

    const [account, setAccount] = useState(undefined);
    const [imageURI, setImageURI] = useState(undefined);
    const [openseaURL, setOpenseaURL] = useState(undefined);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
          setHasMetamask(true);
        }
      });

    useEffect(() => {
             checkIfWalletIsConnected();
    }, []);

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
          try {
            //Get account
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
            console.log(accounts[0]);
            setIsConnected(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setSigner(provider.getSigner());
          } catch (e) {
            console.log(e);
          }
        } else {
          setIsConnected(false);
        }
    }  

    // Checks if wallet is connected
    const checkIfWalletIsConnected = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                    console.log("Got the ethereum obejct: ", window.ethereum);
                    const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });

                if (accounts.length !== 0) {
                    console.log("Found authorized Account: ", accounts[0]);
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    setSigner(provider.getSigner());
                    setAccount(accounts[0]);
                    setIsConnected(true);
                } else {
                    console.log("No authorized account found");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("No Wallet found. Connect Wallet");
        }
    };
/* ------------------ WHITELIST MINT FUNCTIONS ------------------ */

    //Function Mint LEGENDARY
/*     async function mint_Legendary(id) {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );

        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_Legendary = await contract.getTokenCounter_Legendary();
        console.log(`Token ID Category Legendary: ${tokenId_Legendary.toString()}`);
        const contentIdMetadata_Legendary =
            "QmZUwBLjDjGfWC3mnSmMWj8CF1LTVa4di5QSeSvuDtQi2z";
        const metadataURI = `${contentIdMetadata_Legendary}/${id}.json`;

        const contentIdImages_Legendary =
            "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Legendary}/${tokenId_Legendary}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.payToMint_Legendary(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();

            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            postAPI(tokenId_Legendary);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    } */

    //Function Mint Category ULTRARARE
    async function mint_UltraRare() {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );
        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_UltraRare = await contract.getTokenCounter_UltraRare();
        console.log(`Token ID Category UltraRare: ${tokenId_UltraRare.toString()}`);

        const contentIdMetadata_UltraRare =
            "QmQswc9AWienxmWLA3pGBQpMJ3R2kXdWCn51GAMxj5G9rE";
        const metadataURI = `${contentIdMetadata_UltraRare}/${tokenId_UltraRare}.json`;
        console.log(`https://ipfs.io/ipfs/${metadataURI}`);

        const contentIdImages_UltraRare=
            "QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_UltraRare}/${tokenId_UltraRare}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.payToMint_UltraRare(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();
            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Mint Category RARE
    async function mint_Rare() {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );
        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_Rare = await contract.getTokenCounter_Rare();
        console.log(`Token ID Category Rare: ${tokenId_Rare.toString()}`);

        const contentIdMetadata_Rare =
            "QmXULEzuP1aHfgbtRMDVwH2L2qG76K48cDd8s4S3uZsHxu";
        const metadataURI = `${contentIdMetadata_Rare}/${tokenId_Rare}.json`;
        console.log(`https://ipfs.io/ipfs/${metadataURI}`);

        const contentIdImages_Rare =
            "QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Rare}/${tokenId_Rare}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.payToMint_Rare(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();
            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Mint Category UNCOMMON
    async function mint_Uncommon() {
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(
                dragonKeeper,
                DragonKeeper.abi,
                signer
            );
            const tokenID_Collection = await contract.getTokenCounter();
            console.log(`Token ID: ${tokenID_Collection.toString()}`);
    
            const tokenId_Uncommon = await contract.getTokenCounter_Uncommon();
            console.log(`Token ID Category Uncommon: ${tokenId_Uncommon.toString()}`);
    
            const contentIdMetadata_Uncommon =
                "QmSuK42qdgBqhMQS69U4wJ9BBWrBRsdTgemrHqHfhAacM5";
            const metadataURI = `${contentIdMetadata_Uncommon}/${tokenId_Uncommon}.json`;
            console.log(`https://ipfs.io/ipfs/${metadataURI}`);
    
            const contentIdImages_Uncommon =
                "QmWBWUpMCkqFoWb9QmLwVo3qKxoY1om1aBc6QtUUDui2Y1";
            const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Uncommon}/${tokenId_Uncommon}.png`;
    
            //URL Needs to be updated with production data
            const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
            try {
                const result = await contract.payToMint_Uncommon(metadataURI, {
                value: ethers.utils.parseEther("0.005"),
                });
                await result.wait();
                setImageURI(imageURI);
                setOpenseaURL(openSeaURL);
                console.log(openSeaURL);
            } catch (error) {
                console.log(error);
            }
            } else {
            console.log("Please install MetaMask");
        }
    }

    //Function Mint Category COMMON
    async function mint_Common() {
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(
                dragonKeeper,
                DragonKeeper.abi,
                signer
            );
            const tokenID_Collection = await contract.getTokenCounter();
            console.log(`Token ID: ${tokenID_Collection.toString()}`);
    
            const tokenId_Common = await contract.getTokenCounter_Common();
            console.log(`Token ID Category Common: ${tokenId_Common.toString()}`);
    
            const contentIdMetadata_Common =
                "QmazdhrysQenu9RePX2Y47VbJAUYMCjgtkMi6daepDLMwL";
            const metadataURI = `${contentIdMetadata_Common}/${tokenId_Common}.json`;
            console.log(`https://ipfs.io/ipfs/${metadataURI}`);
    
            const contentIdImages_Common =
                "QmTTYqyXV9vpgwtvn9EeknNAuGqMScyf666GpzXDJrMHtz";
            const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Common}/${tokenId_Common}.png`;
    
            //URL Needs to be updated with production data
            const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
            try {
                const result = await contract.payToMint_Common(metadataURI, {
                value: ethers.utils.parseEther("0.005"),
                });
                await result.wait();
                setImageURI(imageURI);
                setOpenseaURL(openSeaURL);
                console.log(openSeaURL);
            } catch (error) {
                console.log(error);
            }
            } else {
            console.log("Please install MetaMask");
        }
    }

    /* ------------------ WHITELIST MINT FUNCTIONS ------------------ */

    //Function Whitelist Mint LEGENDARY
    async function whitelist_Mint_Legendary(id) {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );

        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_Legendary = await contract.getTokenCounter_Legendary();
        console.log(`Token ID Category Legendary: ${tokenId_Legendary.toString()}`);
        const contentIdMetadata_Legendary =
            "QmZUwBLjDjGfWC3mnSmMWj8CF1LTVa4di5QSeSvuDtQi2z";
        const metadataURI = `${contentIdMetadata_Legendary}/${id}.json`;

        const contentIdImages_Legendary =
            "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Legendary}/${tokenId_Legendary}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.whitelistMinting_Legendary(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();

            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Whitelist Mint Category ULTRARARE
    async function whitelist_Mint_UltraRare() {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );
        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_UltraRare = await contract.getTokenCounter_UltraRare();
        console.log(`Token ID Category UltraRare: ${tokenId_UltraRare.toString()}`);

        const contentIdMetadata_UltraRare =
            "QmQswc9AWienxmWLA3pGBQpMJ3R2kXdWCn51GAMxj5G9rE";
        const metadataURI = `${contentIdMetadata_UltraRare}/${tokenId_UltraRare}.json`;
        console.log(`https://ipfs.io/ipfs/${metadataURI}`);

        const contentIdImages_UltraRare=
            "QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_UltraRare}/${tokenId_UltraRare}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.whitelistMinting_UltraRare(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();
            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Whitelist Mint Category RARE
    async function whitelist_Mint_Rare() {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );
        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        const tokenId_Rare = await contract.getTokenCounter_Rare();
        console.log(`Token ID Category Rare: ${tokenId_Rare.toString()}`);

        const contentIdMetadata_Rare =
            "QmXULEzuP1aHfgbtRMDVwH2L2qG76K48cDd8s4S3uZsHxu";
        const metadataURI = `${contentIdMetadata_Rare}/${tokenId_Rare}.json`;
        console.log(`https://ipfs.io/ipfs/${metadataURI}`);

        const contentIdImages_Rare =
            "QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Rare}/${tokenId_Rare}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.whitelistMinting_Rare(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();
            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Mint Category UNCOMMON
    async function whitelist_Mint_Uncommon() {
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(
                dragonKeeper,
                DragonKeeper.abi,
                signer
            );
            const tokenID_Collection = await contract.getTokenCounter();
            console.log(`Token ID: ${tokenID_Collection.toString()}`);
    
            const tokenId_Uncommon = await contract.getTokenCounter_Uncommon();
            console.log(`Token ID Category Uncommon: ${tokenId_Uncommon.toString()}`);
    
            const contentIdMetadata_Uncommon =
                "QmSuK42qdgBqhMQS69U4wJ9BBWrBRsdTgemrHqHfhAacM5";
            const metadataURI = `${contentIdMetadata_Uncommon}/${tokenId_Uncommon}.json`;
            console.log(`https://ipfs.io/ipfs/${metadataURI}`);
    
            const contentIdImages_Uncommon =
                "QmWBWUpMCkqFoWb9QmLwVo3qKxoY1om1aBc6QtUUDui2Y1";
            const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Uncommon}/${tokenId_Uncommon}.png`;
    
            //URL Needs to be updated with production data
            const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
            try {
                const result = await contract.whitelistMinting_Uncommon(metadataURI, {
                value: ethers.utils.parseEther("0.005"),
                });
                await result.wait();
                setImageURI(imageURI);
                setOpenseaURL(openSeaURL);
                console.log(openSeaURL);
            } catch (error) {
                console.log(error);
            }
            } else {
            console.log("Please install MetaMask");
        }
    }

    //Function Mint Category COMMON
    async function mint_Common() {
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(
                dragonKeeper,
                DragonKeeper.abi,
                signer
            );
            const tokenID_Collection = await contract.getTokenCounter();
            console.log(`Token ID: ${tokenID_Collection.toString()}`);
    
            const tokenId_Common = await contract.getTokenCounter_Common();
            console.log(`Token ID Category Common: ${tokenId_Common.toString()}`);
    
            const contentIdMetadata_Common =
                "QmazdhrysQenu9RePX2Y47VbJAUYMCjgtkMi6daepDLMwL";
            const metadataURI = `${contentIdMetadata_Common}/${tokenId_Common}.json`;
            console.log(`https://ipfs.io/ipfs/${metadataURI}`);
    
            const contentIdImages_Common =
                "QmTTYqyXV9vpgwtvn9EeknNAuGqMScyf666GpzXDJrMHtz";
            const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Common}/${tokenId_Common}.png`;
    
            //URL Needs to be updated with production data
            const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
            try {
                const result = await contract.payToMint_UltraRare(metadataURI, {
                value: ethers.utils.parseEther("0.005"),
                });
                await result.wait();
                setImageURI(imageURI);
                setOpenseaURL(openSeaURL);
                console.log(openSeaURL);
            } catch (error) {
                console.log(error);
            }
            } else {
            console.log("Please install MetaMask");
        }
    }
    /* const imageCategory = () => {

    } */


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
                    {hasMetamask ? (
                    isConnected ? (
                        <button className="mb-4 shadow-lg button learn-more" onClick={whitelist_Mint_UltraRare} >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            BUY
                        </span>
                    </button>      
                    ) : (
                        <button
                        onClick={() => connect()}
                        className="mb-4 shadow-lg button learn-more" 
                        >
                                                <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            CONNECT
                        </span>
                        </button>
                    )
                    ) : (
                        <Link
                        href={`https://metamask.io/download/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button nav-button btn-sm mx-4"
                    >
                        <button
                            //onClick={() => connect()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            You need Metamask to adquire an NFT
                        </button>
                    </Link>
                    )}
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
                    {hasMetamask ? (
                    isConnected ? (
                        <button className="mb-4 shadow-lg button learn-more" onClick={mint_Rare} >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            BUY
                        </span>
                    </button>      
                    ) : (
                        <button
                        onClick={() => connect()}
                        className="mb-4 shadow-lg button learn-more" 
                        >
                                <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            CONNECT
                        </span>
                        </button>
                    )
                    ) : (
                        <Link
                        href={`https://metamask.io/download/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button nav-button btn-sm mx-4"
                    >
                         <button
                        className="mb-4 shadow-lg button learn-more" 
                        >
                                <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            CONNECT
                        </span>
                        </button>
                    </Link>
                    )}
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
                    <div className='flex items-center h-full w-44'>
                    {hasMetamask ? (
                    isConnected ? (
                        <button className="mb-4 shadow-lg button learn-more" onClick={mint_Uncommon} >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            BUY
                        </span>
                    </button>      
                    ) : (
                        <button
                        onClick={() => connect()}
                        className="mb-4 shadow-lg button learn-more" 
                        >
                                                <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            CONNECT
                        </span>
                        </button>
                    )
                    ) : (
                        <Link
                        href={`https://metamask.io/download/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button nav-button btn-sm mx-4"
                    >
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            You need Metamask to adquire an NFT
                        </button>
                    </Link>
                    )}
                    </div> 
                </div>
            </div>

            {/* ----------- Categorys 3----------- */}
            <div className='mb-6 text-lg border-b may text-secondary'>COMMON</div>
            <div className='flex flex-row justify-around w-full mb-8 text-justify'>
                {/* <img src='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' /> */}
                <div className='flex flex-col items-center justify-between w-7/12 h-12/12 '>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className='flex items-center h-full w-44'>
                    {hasMetamask ? (
                    isConnected ? (
                        <button className="mb-4 shadow-lg button learn-more" onClick={mint_Common} >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            BUY
                        </span>
                    </button>      
                    ) : (
                        <button
                        onClick={() => connect()}
                        className="mb-4 shadow-lg button learn-more" 
                        >
                                                <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" translate="no">
                            CONNECT
                        </span>
                        </button>
                    )
                    ) : (
                        <Link
                        href={`https://metamask.io/download/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button nav-button btn-sm mx-4"
                    >
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            You need Metamask to adquire an NFT
                        </button>
                    </Link>
                    )}
                    </div>
                </div>
                <img src='https://kubicsnft.mypinata.cloud/ipfs/QmTTYqyXV9vpgwtvn9EeknNAuGqMScyf666GpzXDJrMHtz/2508.png' className='object-cover w-4/12 duration-150 ease-in rounded-lg ef-img' alt='nft' />
            </div>
        </div>

    );
}

export default NFTZone;
