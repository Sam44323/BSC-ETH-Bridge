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

    console.log((await ethToken.balanceOf(ethBridge.address)).toString());
    console.log((await bscToken.balanceOf(bscBridge.address)).toString());

    console.log((await ethToken.balanceOf(addr1.address)).toString());
    console.log((await bscToken.balanceOf(addr2.address)).toString());
  });

  it("Bridge from ETH to BSC", async () => {});
});
