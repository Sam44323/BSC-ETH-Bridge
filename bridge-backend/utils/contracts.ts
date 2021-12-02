import { Contracts } from "./config";
import { getWeb3 } from "./web3";

export const getContracts = async () => {
  const ethWeb = getWeb3("ETH");
  const bscWeb = getWeb3("BSC");
  const contractInstances = [
    new ethWeb.eth.Contract(Contracts[0].abi, Contracts[0].address),
    new bscWeb.eth.Contract(Contracts[1].abi, Contracts[1].address),
  ];

  return contractInstances;
};
