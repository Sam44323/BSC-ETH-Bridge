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
    addr2: SignerWithAddress,
    ethContractBalance,
    bscContractBalance,
    ethUserBalance,
    bscUserBalance;

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
    await bscToken.transfer(addr1.address, 100);
  });

  it("Bridge from ETH to BSC", async () => {
    /*
    Burning the ETK token on ethereum!
    */
    await ethToken.connect(addr1).approve(ethBridge.address, 10);
    await ethBridge.connect(addr1).burn(10);

    ethContractBalance = (
      await ethToken.balanceOf(ethBridge.address)
    ).toString();
    ethUserBalance = (await ethToken.balanceOf(addr1.address)).toString();

    console.log(
      `----> Value of ETH bridge contract after locking the value ${ethContractBalance} \n`
    );
    console.log(
      `----> Value of ETK for  addr1 after burning on ETH bridge ${ethUserBalance} \n`
    );

    expect(ethContractBalance).to.be.equal("1010");
    expect(ethUserBalance).to.be.equal("90");

    /*
    Minting the BTK token equal amount to on binance chain!
    */
    const chainNonce = await ethBridge.getNonce();
    await bscBridge.mint(addr1.address, 10, chainNonce);

    bscUserBalance = (await bscToken.balanceOf(addr1.address)).toString();

    console.log(
      `----> Value of BTK for addr1 after minting on BSC bridge ${bscUserBalance} \n`
    );

    expect(bscUserBalance).to.be.equal("110");
  });

  it("Bridge from BSC to ETH", async () => {
    /*
    Burning the BTK token on binance chain!
    */
    await bscToken.connect(addr1).approve(bscBridge.address, 10);
    await bscBridge.connect(addr1).burn(10);

    bscContractBalance = (
      await bscToken.balanceOf(bscBridge.address)
    ).toString();
    bscUserBalance = (await bscToken.balanceOf(addr1.address)).toString();

    console.log(
      `----> Value of BSC bridge contract after locking the value ${bscContractBalance} \n`
    );
    console.log(
      `----> Value of BTK for  addr1 after burning on BSC bridge ${bscUserBalance} \n`
    );

    expect(bscContractBalance).to.be.equal("1010");
    expect(bscUserBalance).to.be.equal("90");

    /*
    Minting the ETK token equal amount to on ethereum chain!
    */
    const chainNonce = await bscBridge.getNonce();
    await ethBridge.mint(addr1.address, 10, chainNonce);

    ethUserBalance = (await ethToken.balanceOf(addr1.address)).toString();

    console.log(
      `----> Value of ETK for addr1 after minting on ETH bridge ${ethUserBalance} \n`
    );
    expect(ethUserBalance).to.be.equal("110");
  });
});
