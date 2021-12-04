import { getWeb3 } from "./web3";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export const getAdminAccount = async (provider: "ETH" | "BSC") => {
  const web3 = getWeb3(provider);
  return web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY!);
};
