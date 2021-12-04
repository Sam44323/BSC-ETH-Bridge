import { abi as BTKToken } from "../abis/TokenBSC.json";
import { abi as BSCBridge } from "../abis/BridgeBSC.json";
import { abi as ETKToken } from "../abis/TokenETH.json";
import { abi as ETHBridge } from "../abis/BridgeETH.json";

export interface ContractsConfig {
  name: string;
  abi: any;
  address: string;
}

export const Contracts: ContractsConfig[] = [
  {
    name: "BTKToken",
    abi: BTKToken,
    address: process.env.REACT_APP_BTK_TOKEN!,
  },
  {
    name: "ETKToken",
    abi: ETKToken,
    address: process.env.REACT_APP_ETK_TOKEN!,
  },
  {
    name: "BSCBridge",
    abi: BSCBridge,
    address: process.env.REACT_APP_BTK_BRIDGE!,
  },
  {
    name: "ETHBridge",
    abi: ETHBridge,
    address: process.env.REACT_APP_ETK_BRIDGE!,
  },
];
