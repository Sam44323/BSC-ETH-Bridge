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
    token.transfer(owner.address, 1000);
  });

  describe("Admin Checker Tests", () => {
    it("Admin should be the deployer", async () => {
      expect(await token.admin()).to.equal(owner.address);
    });

    it("Update the admin for the token contract", async () => {
      await token.updateAdmin(addr1.address);
      expect(await token.admin()).to.equal(addr1.address);
    });
  });

  describe("Token transaction checker", () => {
    it("Check the initial minted token Balance for owner", async () => {
      console.log(
        parseInt(await (await token.balanceOf(owner.address)).toString())
      );
      expect(
        parseInt(await (await token.balanceOf(owner.address)).toString()) /
          10 ** 18
      ).to.equal(1000);
    });

    it("Transfer token from owner address to another address", async () => {
      await token.connect(owner).transfer(addr1.address, 10);

      expect(
        parseInt(await (await token.balanceOf(owner.address)).toString()) /
          10 ** 18
      ).to.equal(990);
      expect(
        (await token.balanceOf(addr1.address)).toNumber() / 10 ** 18
      ).to.equal(10);
    });

    it("Transfer token from one user to the other", async () => {
      await token.connect(owner).transfer(addr1.address, 10);

      await token.connect(addr1).transfer(addr2.address, 5);

      expect(
        (await token.balanceOf(addr1.address)).toNumber() / 10 ** 18
      ).to.equal(10);
      expect(
        parseInt(await (await token.balanceOf(owner.address)).toString())
      ).to.equal(990);
    });
  });
});
