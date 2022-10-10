import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';
import Link from "next/link"
import axios from "axios";
import { ethers } from "ethers";
import { dragonKeeper } from "../../constants";
import DragonKeeper from "../../artifacts/contracts/DragonKeeper.sol/DragonKeeper.json";
import { use } from 'chai';


const CardPremium = (props) => {

    const [hasMetamask, setHasMetamask] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState(undefined);
    const [nfts_legendary, setNft_Legendary ] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [imageURI, setImageURI] = useState(undefined);
    const [openseaURL, setOpenseaURL] = useState(undefined);

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

    //Function to call the API and get NFTS info
    const getAPI = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/NFTsMongo/`);
            const data = await res.json();
            setNft_Legendary(data);
            console.log(data);
            console.log("data saved")
        } catch (err) {
            console.log(err);
        }
    }; 

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
          try {
            //Get account
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
            //console.log(accounts[0]);
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
    async function checkIfWalletIsConnected () {
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

    //Testing Check if the NFT is sold agains blockchain

/*     async function check_sold (){
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(
                dragonKeeper,
                DragonKeeper.abi,
                signer
            );
        //Bucle for to loop from 0 to 40
        let legendaryMinted = [];
        for(var i=0;i<40; i++){ 
            const uri = `QmZUwBLjDjGfWC3mnSmMWj8CF1LTVa4di5QSeSvuDtQi2z/${i}.json`
            try {
                const result = await contract.isContentOwned(uri);
                //await result.wait();
                
                if (result == true){
                    legendaryMinted.push(i)
                }
                console.log(`NFT Legendary ${i} is owned? ${result}`);
            } catch (error) {
                console.log(error);
            }
        }
        console.log(legendaryMinted);
        }
    } */
 

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

        const tokenId_Legendary = await contract.getTokenCounter_Legendary();
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
            getAPI();
            console.log(openSeaURL);
        } catch (error) {
            console.log(error);
        }
        } else {
        console.log("Please install MetaMask");
        }
    }

    //Function Mint LEGENDARY
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
            {hasMetamask ? (
                    isConnected ? (
                        <button className="mb-4 shadow-lg button learn-more" onClick={() => mint_Legendary(props.id)} >
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
    );
};



export default CardPremium
