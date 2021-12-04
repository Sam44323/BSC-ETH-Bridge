import React, { useEffect } from "react";
import styles from "../styles/components/Header.module.scss";
import { ethereum as ethImg, binance } from "../assets/index";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Button from "./Button";

const tokenArray = [
  process.env.REACT_APP_ETK_TOKEN,
  process.env.REACT_APP_BTK_TOKEN,
];

/**
 *
 * @returns the header container with wallet connect, address display and balances
 */

const Header: React.FC = () => {
  const [accountData, setAccountData] = React.useState<any>(null); // storing account data

  const { account, activateBrowserWallet, chainId } = useEthers();

  // storing the balance shown in the header

  let balance = useTokenBalance(
    chainId === 4 ? tokenArray[0] : tokenArray[1],
    account
  );

  useEffect(() => {
    if (chainId === 4 || chainId === 97) {
      setAccountData(account);
    }
  }, [account, balance, chainId]);

  return (
    <div className={styles.HeaderContainer}>
      <section className={styles.ButtonContainer}>
        <Button
          clickHandler={
            !account
              ? () =>
                  activateBrowserWallet(() => {
                    toast.dismiss();
                    toast("Please either select Rinkeby or testnet on BSC", {
                      autoClose: 1600,
                      closeOnClick: true,
                      theme: "dark",
                    });
                  })
              : () => {}
          }
        >
          {accountData
            ? `${accountData?.substring(0, 4)}...${accountData?.substring(
                accountData.length - 4
              )}`
            : "Connect Wallet"}
        </Button>
      </section>
      <section className={styles.BalanceSection}>
        <img src={chainId === 4 ? ethImg : binance} alt="logo" />
        <p>
          {balance &&
            `${
              formatEther(balance).split(".")[1]
                ? formatEther(balance).split(".")[0] +
                  "." +
                  formatEther(balance).split(".")[1].slice(0, 3)
                : formatEther(balance).split(".")[0]
            }`}{" "}
          {chainId === 4 ? "ETK" : "BTK"}
        </p>
      </section>
    </div>
  );
};

export default Header;
