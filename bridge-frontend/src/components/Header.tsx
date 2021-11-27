import React, { useEffect } from "react";
import styles from "../styles/components/Header.module.scss";
import { ethereum as ethImg, binance } from "../assets/index";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Button from "./Button";

const tokenArray = [process.env.REACT_ETK_TOKEN, process.env.REACT_BTK_TOKEN];

const Header: React.FC = () => {
  const [accountData, setAccountData] = React.useState<any>(null);

  const { account, activateBrowserWallet, chainId } = useEthers();
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
        <p>{balance && formatEther(balance).slice(0, 6)} ETK</p>
      </section>
    </div>
  );
};

export default Header;
