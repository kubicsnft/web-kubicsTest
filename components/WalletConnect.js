import { ethers } from "ethers";
import { useState } from "react";
import Link from "next/link";

const style = {
  containerIcon: `lg:basis-1/5 p-4 flex items-center justify-end z-50`,
  connet: `text-black sm:text-sm text-[0.6rem] py-1 px-1 sm:px-4 sm:py-2 border-2 border-[#02E3E2] rounded-full  hover:text-[#02E3E2] hover:bg-gray-100 hover:border-gray-100  `,
  wallet: `font-sans text-xs text-[#c8cacd] border border-cyan-300  rounded p-2 hover:border-2 hover:text-black`,
};

export default function WalletConnect() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState();
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    const balance = await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
  };

  return (
    <div>
      <div className={style.containerIcon}>
        {account ? (
          <div>
            <Link
              href={`https://etherscan.io/address/${account}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button nav-button btn-sm mx-4 "
            >
              <button className={style.wallet} variant="outline-light">
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
                <div>Balance: {balance}</div>
              </button>
            </Link>
          </div>
        ) : (
          <button
            className={style.connet}
            onClick={web3Handler}
            variant="outline-light"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}
