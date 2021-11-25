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
  });

  it("Bridge from ETH to BSC", async () => {});
});
