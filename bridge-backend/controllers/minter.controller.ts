import { Request, Response } from "express";
import Web3 from "web3";
import logger from "../utils/logger";
import { getWeb3 } from "../utils/web3";

/**
 *
 * @param txHash the burn hash for the transaction that's being processed by the user
 * @param web3 the web3 instance that should be used to connect with the chain for getting the data
 * @returns the amount burned and verification for the transaction
 */

const amountFetcher = async (txHash: string, web3: Web3) => {
  const receipt = await web3.eth.getTransaction(txHash);
  let amount = web3.utils.hexToNumberString(`0x${receipt.input.slice(35)}`);
  amount = web3.utils.fromWei(amount, "ether");
  return amount;
};

/**
 * method for starting the minting process on ethereum
 * @param req the request object
 * @param res the response object
 */

export const mintETH = async (req: Request, res: Response) => {
  try {
    const { txHash } = req.body;
    console.log(txHash);
    setTimeout(() => logger.info("Waiting for block to be added!"), 3000);
    const burnedAmount = await amountFetcher(txHash, getWeb3("BSC"));
    console.log(burnedAmount);

    res.status(200).json({
      message: "Minting in progress!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
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
    console.log(txHash);
    setTimeout(() => logger.info("Waiting for block to be added!"), 3000);
    const burnedAmount = await amountFetcher(txHash, getWeb3("ETH"));
    console.log(burnedAmount);

    res.status(200).json({
      message: "Minting in progress!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};
