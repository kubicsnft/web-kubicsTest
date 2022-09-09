const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMinting", function () {
  it("Should mint and transfer and NFT to someone", async function () {
    const NFTMinting = await ethers.getContractFactory("KubicsNFT");
    const nftminting = await NFTMinting.deploy();
    await nftminting.deployed();
    console.log(`Contract address: ${nftminting.address}`);

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const metaDataURI = "cid/test.png";

    let balance = await nftminting.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newTokenMinted = await nftminting.payToMint(metaDataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await newTokenMinted.wait();

    balance = await await nftminting.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await nftminting.isContentOwned(metaDataURI)).to.equal(true);
  });
});
