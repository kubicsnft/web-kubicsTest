const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const NFTMinting = await hre.ethers.getContractFactory("KubicsNFT_V2");
  const nftminting = await NFTMinting.deploy();

  await nftminting.deployed();

  console.log("My NFT deployed to:", nftminting.address);

  fs.writeFileSync(
    "./constants.js",
    `export const nftminting_v2 = "${nftminting.address}"`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
