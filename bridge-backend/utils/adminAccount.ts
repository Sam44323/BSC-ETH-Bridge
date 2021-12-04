import { getWeb3 } from "./web3";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const getAdminAccount = async () => {
  const web3 = getWeb3("ETH");
  return web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY!);
};
