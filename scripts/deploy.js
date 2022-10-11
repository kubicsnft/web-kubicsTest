const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const NFTDragonKeeper = await hre.ethers.getContractFactory("DragonKeeper");
  const nftDragonKeeper = await NFTDragonKeeper.deploy();

  await nftDragonKeeper.deployed();

  console.log(
    "My NFT DragonKeeper contract deployed to:",
    nftDragonKeeper.address
  );

  fs.writeFileSync(
    "./constants.js",
    `export const dragonKeeper = "${nftDragonKeeper.address}"`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
