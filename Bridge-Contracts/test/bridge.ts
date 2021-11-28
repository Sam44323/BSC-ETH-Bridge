import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BridgeETH, BridgeBSC, TokenETH, TokenBSC } from "../typechain";

describe("Bridge-Contract testing", function () {
  let bscBridge: BridgeBSC,
    ethBridge: BridgeETH,
    ethToken: TokenETH,
    bscToken: TokenBSC,
    owner: SignerWithAddress,
    addr1: SignerWithAddress;

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

    [owner, addr1] = await ethers.getSigners();

    // minting some tokens for the bridges
    await ethToken.transfer(ethBridge.address, 1000);
    await bscToken.transfer(bscBridge.address, 1000);

    // transferring some tokens for the eth token and the bsc token to addr1
    await ethToken.transfer(addr1.address, 100);
    await bscToken.transfer(addr1.address, 100);
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
      expect(await ethToken.balanceOf(ethBridge.address)).to.be.equal("1010");
    });

    it("Test the burning on BSC bridge contract", async () => {
      await bscToken.connect(addr1).approve(bscBridge.address, 9);
      await bscBridge.connect(addr1).burn(9);
      const balance = await (
        await bscToken.balanceOf(addr1.address)
      ).toString();

      expect(balance).to.be.equal("91");
      expect(await bscToken.balanceOf(bscBridge.address)).to.be.equal("1009");
    });

    it("Test the minting on ETH bridge contract", async () => {
      await ethToken.approve(ethBridge.address, 10);
      const bscNonce = await bscBridge.getNonce();
      await ethBridge.mint(addr1.address, 10, bscNonce);

      expect(await ethToken.balanceOf(addr1.address)).to.be.equal("110");
      expect(
        await (await ethToken.balanceOf(ethBridge.address)).toString()
      ).to.be.equal("990");
    });

    it("Test the minting on BSC bridge contract", async () => {
      await bscToken.approve(bscBridge.address, 10);
      const ethNonce = await ethBridge.getNonce();
      await bscBridge.mint(addr1.address, 10, ethNonce);

      expect(await bscToken.balanceOf(addr1.address)).to.be.equal("110");
      expect(
        await (await bscToken.balanceOf(bscBridge.address)).toString()
      ).to.be.equal("990");
    });
  });
});
