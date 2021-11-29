import { useEthers } from "@usedapp/core";
import { toast } from "react-toastify";
import { getContracts } from "../utils/contracts";
import { useEffect, useState } from "react";

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
    console.log(contractsData);
  };

  const burnETK = async (amount: string) => {};

  return { approveETKBurn, burnETK };
};

export default useBurnETK;
