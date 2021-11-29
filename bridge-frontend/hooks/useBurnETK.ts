import { useContractFunction } from "@usedapp/core";
import { abi as ETKToken } from "../abis/Tokens/TokenETH.sol/TokenETH.json";
import { abi as ETHBridge } from "../abis/bridge/BridgeETH.sol/BridgeETH.json";
import { useState } from "react";
import { Contract } from "@ethersproject/contracts";

const useBurnETK = () => {
  //updates
  const ETKTokenContract = new Contract(
    process.env.REACT_APP_ETK_TOKEN,
    ETKToken
  );
  const ETKBridgeContract = new Contract(
    process.env.REACT_APP_ETK_BRIDGE,
    ETHBridge
  );

  const {} = useContractFunction(ETKTokenContract, "burn");

  const approveETKBurn = async () => {};

  const burnETK = async () => {};

  return { approveETKBurn, burnETK };
};
