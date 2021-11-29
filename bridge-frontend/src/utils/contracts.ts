import { Contracts } from "./config";
import { ContractsConfig } from "./config";
import { getWeb3 } from "./web3";

export const getContracts = async () => {
  const web3 = getWeb3();
  const contractInstances = Contracts.map(
    (contract) => new web3.eth.Contract(contract.abi, contract.address)
  );

  return contractInstances;
};
