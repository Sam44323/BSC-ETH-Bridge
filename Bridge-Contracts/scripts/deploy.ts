import { ethers, run } from "hardhat";

/*
 If you have contracts with similar byte-codes, you can use the scripts in this format for verification
 npx hardhat verify --network <network-name> <contract-address> --contract "contracts/Tokens/TokenETH.sol:TokenETH(contract file path)" 
 */

async function main() {
  const ETHToken = await ethers.getContractFactory("TokenETH");
  const ethToken = await ETHToken.deploy();

  console.log("Deploying...");
  await ethToken.deployed();

  try {
    console.log("Verifying TokenETH...");
    await run("verify:verify", {
      address: ethToken.address,
      contract: "contracts/Tokens/TokenETH.sol:TokenETH",
      constructorArguments: [],
    });
  } catch (e: any) {
    console.error(e.message);
  }

  console.log("ETH Token deployed to:", ethToken.address);
}

main()
  .then(() => {
    console.log("Successfully deployed all contracts!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
