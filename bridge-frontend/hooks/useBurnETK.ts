import { useContractFunction } from "@usedapp/core";
import { abi as ETKToken } from "../abis/Tokens/TokenETH.sol/TokenETH.json";
import { abi as ETHBridge } from "../abis/bridge/BridgeETH.sol/BridgeETH.json";
import { useState } from "react";
import { Contract } from "@ethersproject/contracts";

const useBurnETK = () => {
  const approveETKBurn = async () => {};

  const burnETK = async () => {};

  return { approveETKBurn, burnETK };
};
