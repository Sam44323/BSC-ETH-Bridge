import { useContractFunction } from "@usedapp/core";
import { abi as BTKToken } from "../abis/Tokens/TokenBSC.sol/TokenBSC.json";
import { abi as BSCBridge } from "../abis/bridge/BridgeBSC.sol/BridgeBSC.json";
import { useState } from "react";
import { Contract } from "@ethersproject/contracts";

const useBurnBTK = () => {
  const approveBTKBurn = async () => {};

  const burnBTK = async () => {};

  return { approveBTKBurn, burnBTK };
};
