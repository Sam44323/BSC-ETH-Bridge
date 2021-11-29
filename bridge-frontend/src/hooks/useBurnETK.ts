import { useEthers } from "@usedapp/core";
import { abi as ETKToken } from "../abis/Tokens/TokenETH.sol/TokenETH.json";
import { abi as ETHBridge } from "../abis/bridge/BridgeETH.sol/BridgeETH.json";
import { toast } from "react-toastify";

const useBurnETK = () => {
  // contract for the etk token on ethereum(rinkeby)
  const { account } = useEthers();

  // method for approving to burn some amount of the etk token mentioned by user

  const approveETKBurn = async (amount: string) => {};

  const burnETK = async (amount: string) => {};

  return { approveETKBurn, burnETK };
};

export default useBurnETK;
