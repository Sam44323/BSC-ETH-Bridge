import Web3 from "web3";

/**
 * @returns the web3 instance based on custom provider
 */

export const getWeb3 = () => {
  return new Web3(
    Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
  );
};
