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
    const id = toast.success(`Approving in progress for ${amount} ETK`, {
      autoClose: false,
      closeOnClick: true,
      theme: "dark",
    });
    try {
      await contractsData.token.methods
        .approve(
          contractsData.bridge.options.address,
          getWeb3().utils.toWei(amount, "ether")
        )
        .send({
          from: account,
        });
      console.log(amount);
      toast.dismiss(id);
      toast.success(`Approved ${amount} ETK`, {
        autoClose: 1500,
        closeOnClick: true,
        theme: "dark",
      });
      return await burnETK(amount);
    } catch (err) {
      toast.dismiss(id);
      let message = (err as any).message;
      if ((err as any).code === 4001) {
        message = `Error in approving ${amount} ETK. Please try again!`;
      }

      toast.error(message, {
        autoClose: 1500,
        closeOnClick: true,
        theme: "dark",
      });
    }
  };

  // method for burning the amount of the etk token approved by user

  const burnETK = async (amount: string) => {
    const id = toast.success(`Burning in progress for ${amount} ETK`, {
      autoClose: false,
      closeOnClick: true,
      theme: "dark",
    });
    try {
      const txHash = await contractsData.bridge.methods
        .burn(getWeb3().utils.toWei(amount, "ether"))
        .send({
          from: account,
        });
      toast.dismiss(id);
      toast.success(`Burned ${amount} ETK`, {
        autoClose: 1500,
        closeOnClick: true,
        theme: "dark",
      });
      return txHash;
    } catch (err) {
      toast.dismiss(id);
      let message = (err as any).message;
      if ((err as any).code === 4001) {
        message = `Error in burning ${amount} ETK. Please try again!`;
      }

      toast.error(message, {
        autoClose: 1500,
        closeOnClick: true,
        theme: "dark",
      });
    }
  };

  return { approveETKBurn, burnETK };
};

export default useBurnETK;
