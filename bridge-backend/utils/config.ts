import { abi as BTKToken } from "../abis/Tokens/TokenBSC.sol/TokenBSC.json";
import { abi as BSCBridge } from "../abis/bridge/BridgeBSC.sol/BridgeBSC.json";

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
    name: "BSCBridge",
    abi: BSCBridge,
    address: process.env.REACT_APP_BTK_BRIDGE!,
  },
];
