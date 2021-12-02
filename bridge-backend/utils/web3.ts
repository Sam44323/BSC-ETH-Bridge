import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const getWeb3 = (network: "ETH" | "BSC") => {
  return new Web3(
    network === "ETH"
      ? process.env.REACT_APP_ETH_PROVIDER!
      : process.env.REACT_APP_BSC_PROVIDER!
  );
};
