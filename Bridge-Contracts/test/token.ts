import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Token } from "../typechain/Token";

describe("Token", function () {
  // common variables for testing a token-contract
  let Token,
    token: Token,
    owner: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("TokenBSC");
    token = await Token.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Admin should be the deployer", async function () {
    expect(await token.admin()).to.equal(owner.address);
  });
});
