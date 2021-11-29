import { useEthers } from "@usedapp/core";
import { toast } from "react-toastify";
import { getContracts } from "../utils/contracts";
import { useEffect, useState } from "react";
import { getWeb3 } from "../utils/web3";

const useBurnETK = () => {
  // storing the contracts
  const [contractsData, setContractsData] = useState<any>();
  const { account } = useEthers();

  useEffect(() => {
    const getContract = async () => {
      const data = await getContracts();
      setContractsData({
        token: data[1],
        bridge: data[3],
      });
    };
    getContract();
  }, []);

  // method for approving to burn some amount of the etk token mentioned by user

  const approveETKBurn = async (amount: string) => {
    console.log(contractsData.bridge.options.address);
    await contractsData.token.methods
      .approve(
        contractsData.bridge.options.address,
        getWeb3().utils.toWei(amount, "ether")
      )
      .send({
        from: account,
      });
    console.log(amount);
    await burnETK(amount);
  };

  const burnETK = async (amount: string) => {
    await contractsData.bridge.methods
      .burn(getWeb3().utils.toWei(amount, "ether"))
      .send({
        from: account,
      });
  };

  return { approveETKBurn, burnETK };
};

export default useBurnETK;
