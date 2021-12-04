import { Request, Response } from "express";
import Web3 from "web3";
import logger from "../utils/logger";
import { getWeb3 } from "../utils/web3";
import { getContracts } from "../utils/contracts";
import { getAdminAccount } from "../utils/adminAccount";

// UTIL FUNCTIONS

/**
 *
 * @param txHash the burn hash for the transaction that's being processed by the user
 * @param web3 the web3 instance that should be used to connect with the chain for getting the data
 * @returns the amount burned and verification for the transaction
 */

const amountFetcher = async (txHash: string, web3: Web3) => {
  const receipt = await web3.eth.getTransaction(txHash);
  const amount = web3.utils.hexToNumberString(`0x${receipt.input.slice(35)}`);
  return [amount, receipt.from];
};

//----------------------------------------------------------------------------------------------------------------------

// CONTROLLER FUNCTIONS

/**
 * method for starting the minting process on ethereum
 * @param req the request object
 * @param res the response object
 */

export const mintETH = async (req: Request, res: Response) => {
  try {
    const { txHash } = req.body;
    const account = await getAdminAccount("BSC");
    const [ethBridge, bscBridge] = await getContracts();
    logger.info(`ℹ: txHash for burning BTK on binance: ${txHash}`);

    const [burnedAmount, recipient] = await amountFetcher(
      txHash,
      getWeb3("BSC")
    );
    console.log(burnedAmount);
    logger.info(`✅:  Amount of BTK burned is ${burnedAmount}`);
    logger.info(`✅:  Minting for ${burnedAmount} ETK in progress`);
    const bscBridgeNonce = await bscBridge.methods.getNonce().call({
      from: account.address,
    });

    ethBridge.methods
      .mint(recipient, burnedAmount.toString(), bscBridgeNonce)
      .send({
        from: account.address,
        gas: "1000000",
      })
      .on("transactionHash", function (hash) {
        console.log(hash);
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        res.status(200).json({
          message: "Minting done for ETK. Please check your balance!",
        });
        return;
      })
      .on("error", (error) => {
        console.log(error.message);
        return new Error("error");
      });
  } catch (err: any) {
    logger.error(`Can't mint the tokens!: ${err.message}`);
    res.status(500).json({
      message: "Can't mint the tokens!",
    });
  }
};

/**
 * method for starting the minting process on binance
 * @param req the request object
 * @param res the response object
 */

export const mintBSC = async (req: Request, res: Response) => {
  try {
    const { txHash } = req.body;
    const account = await getAdminAccount("BSC");
    const [ethBridge, bscBridge] = await getContracts();
    logger.info(`ℹ: txHash for burning ETK on ethereum: ${txHash}`);
    setTimeout(() => {}, 10000);
    const [burnedAmount, recipient] = await amountFetcher(
      txHash,
      getWeb3("ETH")
    );
    logger.info(`✅:  Amount of ETK burned is ${burnedAmount}`);
    logger.info(`✅:  Minting for ${burnedAmount} BTK in progress`);
    const ethBridgeNonce = await ethBridge.methods.getNonce().call({
      from: account.address,
    });

    bscBridge.methods
      .mint(recipient, burnedAmount.toString(), ethBridgeNonce)
      .send({
        from: account.address,
        gas: "1000000",
      })
      .on("transactionHash", function (hash) {
        console.log(hash);
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        res.status(200).json({
          message: "Minting done for BTK. Please check your balance!",
        });
        return;
      })
      .on("error", (error) => {
        console.log(error.message);
        return new Error("error");
      });
  } catch (err: any) {
    logger.error(`Can't mint the tokens!: ${err.message}`);
    res.status(500).json({
      message: "Error while minting. Please try again!",
    });
  }
};
