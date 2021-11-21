import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BridgeETH, BridgeBSC, Bridge, TokenETH, TokenBSC } from "../typechain";

describe("Bridge-Contract testing", function () {
  let BridgeRoot: Bridge,
    bscBridge: BridgeBSC,
    ethBridge: BridgeETH,
    ethToken: TokenETH,
    bscToken: TokenBSC,
    owner,
    addr1,
    addr2;
  beforeEach(async () => {
    // deploying tokens for the bscBridge and the ethBridge
    bscToken = await (await ethers.getContractFactory("TokenBSC")).deploy();
    bscToken = await (await ethers.getContractFactory("TokenETH")).deploy();

    // deploying the contracts for the ethBridge and the bscBridge
    bscBridge = await (
      await ethers.getContractFactory("BridgeBSC")
    ).deploy(bscToken.address);
    ethBridge = await (
      await ethers.getContractFactory("BridgeETH")
    ).deploy(ethToken.address);
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Test", async () => {
    console.log(BridgeRoot);
    expect(true).to.not.be.undefined;
  });
});
