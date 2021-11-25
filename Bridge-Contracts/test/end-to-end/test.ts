import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {
  BridgeETH,
  BridgeBSC,
  Bridge,
  TokenETH,
  TokenBSC,
} from "../../typechain";
describe("Bridging from ETH to BSC and vice-versa", () => {
  let bscBridge: BridgeBSC,
    ethBridge: BridgeETH,
    ethToken: TokenETH,
    bscToken: TokenBSC,
    owner: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    bscToken = await (await ethers.getContractFactory("TokenBSC"))
      .connect(owner)
      .deploy();
    ethToken = await (await ethers.getContractFactory("TokenETH"))
      .connect(owner)
      .deploy();

    bscBridge = await (await ethers.getContractFactory("BridgeBSC"))
      .connect(owner)
      .deploy(bscToken.address);
    ethBridge = await (await ethers.getContractFactory("BridgeETH"))
      .connect(owner)
      .deploy(ethToken.address);

    await ethToken.transfer(ethBridge.address, 1000);
    await bscToken.transfer(bscBridge.address, 1000);

    // transferring some tokens for the eth token and the bsc token to addr1
    await ethToken.transfer(addr1.address, 100);
    await bscToken.transfer(addr2.address, 100);
  });

  it("Bridge from ETH to BSC", async () => {
    /*
    Burning the ETK token on ethereum!
    */
    await ethToken.connect(addr1).approve(ethBridge.address, 10);
    await ethBridge.connect(addr1).burn(10);

    console.log(
      `----> Value of ETH bridge contract after locking the value ${(
        await ethToken.balanceOf(ethBridge.address)
      ).toString()} \n`
    );
    console.log(
      `----> Value of addr1 contract after burning on ETH bridge ${(
        await ethToken.balanceOf(addr1.address)
      ).toString()} \n`
    );
  });
});
