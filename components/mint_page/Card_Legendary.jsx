import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link"
import axios from "axios";
import { ethers } from "ethers";
import { dragonKeeper } from "../../constants";
import DragonKeeper from "../../artifacts/contracts/DragonKeeper.sol/DragonKeeper.json";

import { FaEthereum } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';
import { MovingSquareLoader } from 'react-loaders-kit';


function CardPremium(props) {

    const {connectFunction}= props;


    const [hasMetamask, setHasMetamask] = useState(false);
    const [isConnected, setIsConnected] = useState(props.connected);
    const [isSold, setIsSold]=useState(props.sold)
    const [signer, setSigner] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [imageURI, setImageURI] = useState(undefined);
    const [openseaURL, setOpenseaURL] = useState(undefined);

  
    const sold=props.sold
    console.log(`Sold: ${sold}`) 
    console.log(`Is connected in Card_Legendary 1: ${isConnected}`)

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
          setHasMetamask(true);
        }
      }, []);

    
      useEffect(() => {
        checkIfWalletIsConnected();
    }, []);  

    //Function POST to call the API and create NFT
    async function postAPI (id){

        let body = {
            id: id,
            mint: true,
        }
        //Call to Register API

        axios.post('http://localhost:3000/api/NFTsMongo/', body).then(response => {
          console.log(response.data)
        })
    }

    // Checks if wallet is connected
    async function checkIfWalletIsConnected () {
        if (typeof window.ethereum !== "undefined") {
            try {
                    //console.log("Got the ethereum obejct: ", window.ethereum);
                    const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });

                if (accounts.length !== 0) {
                    //console.log("Found authorized Account: ", accounts[0]);
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

    //Function Mint LEGENDARY
    async function mint_Legendary(id) {
        if (typeof window.ethereum !== "undefined") {
        const contract = new ethers.Contract(
            dragonKeeper,
            DragonKeeper.abi,
            signer
        );

        const tokenID_Collection = await contract.getTokenCounter();
        console.log(`Token ID: ${tokenID_Collection.toString()}`);

        console.log(`Token ID Category Legendary: ${id.toString()}`);
        const contentIdMetadata_Legendary =
            "QmZUwBLjDjGfWC3mnSmMWj8CF1LTVa4di5QSeSvuDtQi2z";
        const metadataURI = `${contentIdMetadata_Legendary}/${id}.json`;

        const contentIdImages_Legendary =
            "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Legendary}/${id}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.payToMint_Legendary(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();

            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            postAPI(id);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

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

        //const tokenId_Legendary = await contract.getTokenCounter_Legendary();
        console.log(`Token ID Category Legendary: ${id.toString()}`);
        const contentIdMetadata_Legendary =
            "QmZUwBLjDjGfWC3mnSmMWj8CF1LTVa4di5QSeSvuDtQi2z";
        const metadataURI = `${contentIdMetadata_Legendary}/${id}.json`;

        const contentIdImages_Legendary =
            "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
        const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_Legendary}/${id}.png`;

        //URL Needs to be updated with production data
        const openSeaURL = `https://testnets.opensea.io/assets/goerli/${dragonKeeper}/${tokenID_Collection}`;
        try {
            const result = await contract.whitelistMinting_Legendary(metadataURI, {
            value: ethers.utils.parseEther("0.005"),
            });
            await result.wait();

            setImageURI(imageURI);
            setOpenseaURL(openSeaURL);
            postAPI(id);
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    return (
        <div className="  bg-white p-1 flex flex-col items-cener rounded-lg shadow-md box  border-primary sm:shadow-[#7B94b1]  w-72 sm:w-96">
            {props.sold ? <div className='rounded-lg absolute z-10  w-full sm:h-[23.6rem] h-[19.2rem] bg-[#4d4c4c9a] left-0'></div> : ''}
            <div>
                <Image
                    className="flex rounded-md"
                    key={props.id}
                    src={props.image}
                    alt='nft image'
                    layout='responsive'
                    width={364}
                    height={273}
                />
                {/* {setLoading(false)} */}
            </div>



            <div className='flex flex-row justify-between w-full p-2 text-primary'>

                <div className="flex flex-col items-start justify-between gap-2">
                    <h3 className="text-sm font-bold">{props.title}</h3>
                    {/* <p className='text-sm text-start'>{props.description}</p> */}
                    <div className='z-20 w-44'>
                        {/* <div className='flex items-center justify-center h-12 text-xl font-bold tracking-widest text-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div> */}
                        {hasMetamask ? (
                            isConnected ? (
                                props.sold ? (
                                    <div className='flex items-center justify-center h-12 text-2xl font-bold tracking-widest text-secondary -rotate-6 may'>
                                    <FormattedMessage
                                        id='sold'
                                        defaultMessage='SOLD'
                                        />
                                    </div>
                                ) : (
                                    <button className="text-sm shadow-md button learn-more" onClick={() => mint_Legendary(props.id)}>
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text" translate="no">
                                            Buy Now
                                        </span>
                                    </button>
                                )

                            ) : (
                                <button className="bg-white shadow-lg button learn-more" onClick={() => connectFunction()} >
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text " translate="no">
                                        Connect
                                    </span>
                                </button>
                                )
                                ) : (
                                <Link
                                href={`https://metamask.io/download/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-4 button nav-button btn-sm"
                                >
                                <button className="bg-white shadow-lg button learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text " translate="no">
                                    Connect
                                    </span>
                                </button>
                                </Link>
                        )}
                    </div>
                </div>
                <div className=' text-start'>
                    <p>Price</p>
                    <p className='flex flex-row items-center ' >
                    {/* ====== PRICE ======== */}
                        <FaEthereum />0.5
                    </p>
                </div>
            </div>
        </div>
    );
};



export default CardPremium
