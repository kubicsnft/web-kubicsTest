import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { ethers } from "ethers";
import Link from "next/link";
import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { nftminting_v2 } from "../constants";
import Nftminting_v2 from "../artifacts/contracts/KubicsNFT_V2.sol/KubicsNFT_V2.json";

export default function Test() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [imageURI, setImageURI] = useState(undefined);
  const [openseaURL, setOpenseaURL] = useState(undefined);
  //const [nfts, setNfts] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
      //checkIfWalletIsConnected();
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

  /* ------------------ MINT FUNCTIONS ------------------ */

  //Function Mint Category A
  async function mint_A() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );

      const tokenID_Collection = await contract.getTokenCounter();
      console.log(`Token ID: ${tokenID_Collection.toString()}`);

      const tokenId_A = await contract.getTokenCounterA();
      console.log(`Token ID Category A: ${tokenId_A.toString()}`);
      const contentIdMetadata_A =
        "QmS1smBU43SLdqTZwnLen5FwRyuGrq1TXWTsJkXExCqKUx";
      const metadataURI = `${contentIdMetadata_A}/${tokenId_A}.json`;

      const contentIdImages_A =
        "QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe";
      const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_A}/${tokenId_A}.png`;

      const openSeaURL = `https://testnets.opensea.io/assets/rinkeby/${nftminting_v2}/${tokenID_Collection}`;
      //const raribleURL = `https://testnet.rarible.com/token/0xf808901D01dc14348E7bbcc5Fc46CC3CA4F6efF6:${tokenID_Collection}?tab=overview`;
      try {
        const result = await contract.payToMintA(metadataURI, {
          value: ethers.utils.parseEther("0.005"),
        });
        await result.wait();

        //console.log(raribleURL);
        setImageURI(imageURI);
        setOpenseaURL(openSeaURL);
        //getNFT();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  //Function Mint Category B
  async function mint_B() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );
      const tokenID_Collection = await contract.getTokenCounter();
      console.log(`Token ID: ${tokenID_Collection.toString()}`);

      const tokenId_B = await contract.getTokenCounterB();
      console.log(`Token ID Category B: ${tokenId_B.toString()}`);
      const contentIdMetadata_B =
        "QmavgrqXWwJ2gF1zkGs6cacUQkNS2VAVnufv8mw4xdgymQ";
      const metadataURI = `${contentIdMetadata_B}/${tokenId_B}.json`;

      const contentIdImages_B =
        "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
      const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_B}/${tokenId_B}.png`;

      const openSeaURL = `https://testnets.opensea.io/assets/rinkeby/${nftminting_v2}/${tokenID_Collection}`;
      const raribleURL = `https://testnet.rarible.com/token/${nftminting_v2}:${tokenID_Collection}?tab=overview`;
      try {
        const result = await contract.payToMintB(metadataURI, {
          value: ethers.utils.parseEther("0.005"),
        });
        await result.wait();

        console.log(raribleURL);
        setImageURI(imageURI);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  //Function Mint Category C
  async function mint_C() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );
      const tokenID_Collection = await contract.getTokenCounter();
      console.log(`Token ID: ${tokenID_Collection.toString()}`);

      const tokenId_C = await contract.getTokenCounterC();
      console.log(`Token ID Category C: ${tokenId_C.toString()}`);

      const contentIdMetadata_C =
        "QmXULEzuP1aHfgbtRMDVwH2L2qG76K48cDd8s4S3uZsHxu";
      const metadataURI = `${contentIdMetadata_C}/${tokenId_C}.json`;
      console.log(metadataURI);

      const contentIdImages_C =
        "QmQtxEB6H1PZRHSAQA4rFyUxUW4fiHbwDTVAMfw8SKkRVA";
      const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_C}/${tokenId_C}.png`;

      const openSeaURL = `https://testnets.opensea.io/assets/rinkeby/${nftminting_v2}/${tokenID_Collection}`;
      const raribleURL = `https://testnet.rarible.com/token/${nftminting_v2}:${tokenID_Collection}?tab=overview`;
      try {
        const result = await contract.payToMintC(metadataURI, {
          value: ethers.utils.parseEther("0.005"),
        });
        await result.wait();

        console.log(raribleURL);
        setImageURI(imageURI);
        setOpenseaURL(openSeaURL);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  //Function Mint Category D
  async function mint_D() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );
      const tokenID_Collection = await contract.getTokenCounter();
      console.log(`Token ID: ${tokenID_Collection.toString()}`);

      const tokenId_D = await contract.getTokenCounterD();
      console.log(`Token ID Category D: ${tokenId_D.toString()}`);

      const contentIdMetadata_D =
        "QmVzCjoMt71TJuf53eFxv9TfT7TeWwcuPidvxD54cFszLz";
      const metadataURI = `${contentIdMetadata_D}/${tokenId_D}.json`;
      console.log(`https://ipfs.io/ipfs/${metadataURI}`);

      const contentIdImages_D =
        "QmfEimuwbfPhdgnVnx3J1gbfpfdQYMwEYxGV8RT8sKMEDe";
      const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_D}/${tokenId_D}.png`;

      const openSeaURL = `https://testnets.opensea.io/assets/rinkeby/${nftminting_v2}/${tokenID_Collection}`;
      const raribleURL = `https://testnet.rarible.com/token/${nftminting_v2}:${tokenID_Collection}?tab=overview`;
      try {
        const result = await contract.payToMintD(metadataURI, {
          value: ethers.utils.parseEther("0.005"),
        });
        await result.wait();

        const testMetadataUri = await contract.tokenURI(tokenID_Collection);
        console.log(testMetadataUri);
        console.log(raribleURL);
        setImageURI(imageURI);
        setOpenseaURL(openSeaURL);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  //Function Mint Category E
  async function mint_E() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );
      const tokenID_Collection = await contract.getTokenCounter();
      console.log(`Token ID: ${tokenID_Collection.toString()}`);

      const tokenId_E = await contract.getTokenCounterE();
      console.log(`Token ID Category E: ${tokenId_E.toString()}`);

      const contentIdMetadata_E =
        "QmS1smBU43SLdqTZwnLen5FwRyuGrq1TXWTsJkXExCqKUx";
      const metadataURI = `${contentIdMetadata_E}/${tokenId_E}.json`;

      const contentIdImages_E =
        "QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t";
      const imageURI = `https://kubicsnft.mypinata.cloud/ipfs/${contentIdImages_E}/${tokenId_E}.png`;

      const openSeaURL = `https://testnets.opensea.io/assets/rinkeby/${nftminting_v2}/${tokenID_Collection}`;
      const raribleURL = `https://testnet.rarible.com/token/${nftminting_v2}:${tokenID_Collection}?tab=overview`;
      try {
        const result = await contract.payToMintE(metadataURI, {
          value: ethers.utils.parseEther("0.005"),
        });
        const image = await axios.get(imageURI);
        await result.wait();
        alert(`Congratulations! You have successfully mined your NFT
        You can see it in ${raribleURL}`);

        console.log(raribleURL);
        setImageURI(imageURI);
        setOpenseaURL(openSeaURL);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  /* ------------------ WHITELIST MINT FUNCTIONS ------------------ */

  /* ------------------ TEST FUNCTIONS ------------------ */

  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );

      const balances = await contract.Withdraw();
    }
  }

  //Test function to know how many tokens has the user
  async function balanceOf() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(
        nftminting_v2,
        Nftminting_v2.abi,
        signer
      );

      const balances = await contract.balanceOf(account);
      setBalance(balances.toString());
      console.log(balance);
    }
    /* ------------------ END FUNCTIONS ------------------ */
  }
  return (
    <div>
      {/* Connect to Metamask */}
      <div>
        {hasMetamask ? (
          isConnected ? (
            "Connected! "
          ) : (
            <button
              onClick={() => connect()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Connect
            </button>
          )
        ) : (
          "Please install metamask"
        )}
      </div>

      {/* NFT Category A */}
      <div className="ml-5">
        <div>Categoría A</div>
        <img src="./0.png"></img>
        <div>Descripción</div>
        <div>Precio: 0,005 ETH</div>
        {isConnected ? (
          <button
            onClick={() => mint_A()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mint
          </button>
        ) : (
          ""
        )}
      </div>
      {/* NFT Category B */}
      <div className="ml-5">
        <div>Categoría B</div>
        <img src="./1.png"></img>
        <div>Descripción</div>
        <div>Precio: 0,005 ETH</div>
        {isConnected ? (
          <button
            onClick={() => mint_B()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mint
          </button>
        ) : (
          ""
        )}
      </div>
      {/* NFT Category C */}
      <div className="ml-5">
        <div>Categoría C</div>
        <img src="./Rare_Example.png" className="h-80 w-90"></img>
        <div>Descripción</div>
        <div>Precio: 0,005 ETH</div>
        {isConnected ? (
          <button
            onClick={() => mint_C()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mint
          </button>
        ) : (
          ""
        )}
      </div>
      {/* NFT Category D */}
      <div className="ml-5">
        <div>DragonKeeper Ultra Rare</div>
        <img src="./UltraRare_Image.png" className="h-80 w-90"></img>
        <div>Descripción</div>
        <div>Precio: 0,005 ETH</div>
        {isConnected ? (
          <button
            onClick={() => mint_D()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mint
          </button>
        ) : (
          ""
        )}
      </div>
      {/* NFT Category E */}
      <div className="ml-5">
        <div>DragonKeeper Legendary</div>
        <img src="./Legendary_Image.png" className="h-80 w-90"></img>
        <div>Descripción</div>
        <div>Precio: 0,005 ETH</div>
        {isConnected ? (
          <button
            onClick={() => mint_E()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mint
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        {/* Test button to get the Token Balance of current address */}
        <button onClick={balanceOf}>Token Balance Of: {balance} </button>
      </div>
      <div>
        {/* Test button to withdraw the money of the contract */}
        <button onClick={withdraw}>Whithdraw balance {balance} </button>
      </div>
      <div>
        {imageURI ? (
          <div>
            <div>Congratulations! You have adquired a DragonKeeper NFT</div>
            <img src={imageURI} className="h-80 w-90"></img>
            <Link href={openseaURL}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  See transaction on EtherScan
                </button>
              </a>
            </Link>
            <Link href={openseaURL}>
              <a target="_blank" rel="noreferrer" className="link-item">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  See it on Opensea
                </button>
              </a>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <MyNFTs nfts={nfts}/> */}
    </div>
  );
}

// Rinkeby test contract = "0x115fB9F0eA7F2168953815B8E2A4f82f5d2d8001";
