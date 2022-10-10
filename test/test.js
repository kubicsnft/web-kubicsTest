const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTDragonKeeper", function () {
  it("Should mint and transfer and NFT to someone", async function () {
    const NFTDragonKeeper = await ethers.getContractFactory("DragonKeeper");
    const nftDragonKeeper = await NFTDragonKeeper.deploy();
    await nftDragonKeeper.deployed();
    console.log(`Contract address: ${nftDragonKeeper.address}`);

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const metaDataURI = "cid/test.png";

    let balance = await nftDragonKeeper.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newTokenMinted = await nftDragonKeeper.payToMint_Legendary(
      metaDataURI,
      {
        value: ethers.utils.parseEther("0.05"),
      }
    );

    await newTokenMinted.wait();

    balance = await await nftDragonKeeper.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await nftDragonKeeper.isContentOwned(metaDataURI)).to.equal(true);
  });
});
