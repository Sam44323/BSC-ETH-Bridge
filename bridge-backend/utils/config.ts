import { abi as BTKToken } from "../abis/TokenBSC.json";
import { abi as BSCBridge } from "../abis/BridgeBSC.json";
import { abi as ETKToken } from "../abis/TokenETH.json";
import { abi as ETHBridge } from "../abis/BridgeETH.json";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export interface ContractsConfig {
  name: string;
  abi: any;
  address: string;
}

export const Contracts: ContractsConfig[] = [
  {
    name: "ETHBridge",
    abi: ETHBridge,
    address: process.env.ETK_BRIDGE!,
  },
  {
    name: "BSCBridge",
    abi: BSCBridge,
    address: process.env.BTK_BRIDGE!,
  },
];
