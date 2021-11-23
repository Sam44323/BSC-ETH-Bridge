import { ethers, run } from "hardhat";

/*
 If you have contracts with similar byte-codes, you can use the scripts in this format for verification
 npx hardhat verify --network <network-name> <contract-address> --contract "contracts/Tokens/TokenETH.sol:TokenETH(contract file path)" 
 */

const deployToken = async (token_name: string) => {
  const Token = await ethers.getContractFactory(token_name);
  const token = await Token.deploy();

  try {
    console.log(`Verifying ${token_name}...`);
    await run("verify:verify", {
      address: token.address,
      contract: `contracts/Tokens/${token_name}.sol:${token_name}`,
      constructorArguments: [],
    });
  } catch (e: any) {
    console.error(e.message);
  }

  console.log(`${token_name} deployed to: `, token.address);
};

async function main() {
  await deployToken("TokenETH");
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
