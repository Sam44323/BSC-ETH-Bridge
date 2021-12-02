import { abi as BTKToken } from "../abis/Tokens/TokenBSC.sol/TokenBSC.json";
import { abi as BSCBridge } from "../abis/bridge/BridgeBSC.sol/BridgeBSC.json";
import { abi as ETKToken } from "../abis/Tokens/TokenETH.sol/TokenETH.json";
import { abi as ETHBridge } from "../abis/bridge/BridgeETH.sol/BridgeETH.json";

export interface ContractsConfig {
  name: string;
  abi: any;
  address: string;
}

export const Contracts: ContractsConfig[] = [
  {
    name: "ETHBridge",
    abi: ETHBridge,
    address: process.env.REACT_APP_ETK_BRIDGE!,
  },
  {
    name: "BSCBridge",
    abi: BSCBridge,
    address: process.env.REACT_APP_BTK_BRIDGE!,
  },
];
