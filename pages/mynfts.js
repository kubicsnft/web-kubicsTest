import { useState, useEffect } from "react";
import { ethers } from "ethers";
import NftCard from "../components/nftcard";
import { fetchNFTs } from "./api/fechtnfts";
import { nftminting_v2 } from "../constants";

const Explore = () => {
  const [owner, setOwner] = useState("");
  //const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  });

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
          setOwner(accounts[0]);
          //setContractAddress = nftminting_v2;
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

  return (
    <div>
      <header className=" py-24  mb-12 w-full   alchemy">
        <div className="flex-grow flex justify-end mr-12 mb-12"></div>
        <div className="flex flex-col items-center mb-12">
          <div className="mb-16 text-white text-center">
            <h1 className="text-5xl  font-bold font-body mb-2">
              Alchemy NFT Explorer
            </h1>
            <p>An inspector to find NFTs by owner and contract address </p>
          </div>
          {/* <div className="flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2 ">
            <input
              className="border rounded-sm focus:outline-none py-2 px-3 w-full"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Insert your wallet address"
            ></input>
            <input
              className="focus:outline-none rounded-sm py-2 px-3 w-full"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="Insert NFT Contract address (optional)"
            ></input>
          </div> */}
          <div className="w-2/6 flex justify-center">
            <button
              className="py-3 bg-white rounded-sm w-full hover:bg-slate-100"
              onClick={() => {
                fetchNFTs(owner, nftminting_v2, setNFTs);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </header>

      <section className="flex flex-wrap justify-center">
        {NFTs ? (
          NFTs.map((NFT) => {
            return (
              <div key={NFT.id.tokenId}>
                <NftCard
                  image={NFT.media[0].gateway}
                  id={NFT.id.tokenId}
                  title={NFT.title}
                  address={NFT.contract.address}
                  description={NFT.description}
                  //attributes={NFT.metadata.attributes}
                ></NftCard>
              </div>
            );
          })
        ) : (
          <div>No NFTs found</div>
        )}
      </section>
    </div>
  );
};

export default Explore;
