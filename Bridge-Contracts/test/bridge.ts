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
    owner: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress;

  beforeEach(async () => {
    // deploying tokens for the bscBridge and the ethBridge
    bscToken = await (await ethers.getContractFactory("TokenBSC")).deploy();
    ethToken = await (await ethers.getContractFactory("TokenETH")).deploy();

    // deploying the contracts for the ethBridge and the bscBridge
    bscBridge = await (
      await ethers.getContractFactory("BridgeBSC")
    ).deploy(bscToken.address);
    ethBridge = await (
      await ethers.getContractFactory("BridgeETH")
    ).deploy(ethToken.address);

    [owner, addr1, addr2] = await ethers.getSigners();

    // minting some tokens for the bridges
    await ethToken.mint(ethBridge.address, 1000);
    await bscToken.mint(bscBridge.address, 1000);

    // transferring some tokens for the eth token and the bsc token to addr1
    await ethToken.mint(addr1.address, 100);
    await bscToken.mint(addr1.address, 100);
  });

  describe("Individual testing for Burning and Minting", () => {
    it("Test the burning on ETH bridge contract", async () => {
      // burning some tokens for the eth token

      // approving the bridge contract to have a transaction using the tokens
      await ethToken.connect(addr1).approve(ethBridge.address, 10);
      await ethBridge.connect(addr1).burn(10);
      const balance = await (
        await ethToken.balanceOf(addr1.address)
      ).toString();
      // checking the balance of the eth token for addr1
      expect(balance).to.be.equal("90");
    });

    it("Test the burning on BSC bridge contract", async () => {
      await bscToken.connect(addr1).approve(bscBridge.address, 9);
      await bscBridge.connect(addr1).burn(9);
      const balance = await (
        await bscToken.balanceOf(addr1.address)
      ).toString();

      expect(balance).to.be.equal("91");
    });
  });
});
