import { useContractFunction } from "@usedapp/core";
import { abi as ETKToken } from "../abis/Tokens/TokenETH.sol/TokenETH.json";
import { abi as ETHBridge } from "../abis/bridge/BridgeETH.sol/BridgeETH.json";
import { useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { toast } from "react-toastify";

const useBurnETK = () => {
  // contract for the etk token on ethereum(rinkeby)
  const ETKTokenContract = new Contract(
    process.env.REACT_APP_ETK_TOKEN!,
    ETKToken
  );
  // contract for the btk token on binance(testnet)
  const ETKBridgeContract = new Contract(
    process.env.REACT_APP_ETK_BRIDGE!,
    ETHBridge
  );

  const { send: approveEtkBurnSend, state: approveEtkBurnState } =
    useContractFunction(ETKTokenContract, "approve", {
      transactionName: "Approving some amount by the user to burn!",
    });

  const { send: burnETKSend, state: burnETKState } = useContractFunction(
    ETKBridgeContract,
    "burn",
    {
      transactionName: "Burning the amount approved by the user!",
    }
  );

  // method for approving to burn some amount of the etk token mentioned by user

  const approveETKBurn = async (amount: string) => {
    await approveEtkBurnSend(ETKBridgeContract.address, amount);
    toast.success(`Approved ${amount} ETK`, {
      autoClose: 1000,
      closeOnClick: true,
      theme: "dark",
    });
  };

  const burnETK = async (amount: string) => {
    await burnETKSend(amount);
    toast.success(`Burned ${amount} ETK!`, {
      autoClose: 1000,
      closeOnClick: true,
      theme: "dark",
    });
  };

  return { approveETKBurn, burnETK };
};

export default useBurnETK;
