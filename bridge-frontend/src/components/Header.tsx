import React from "react";
import styles from "../styles/components/Header.module.scss";
import { ethereum, binance } from "../assets/index";

import Button from "./Button";

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <section className={styles.ButtonContainer}>
        <Button clickHandler={() => {}}>Connect Wallet</Button>
      </section>
      <section className={styles.BalanceSection}>
        <img src={ethereum} alt="logo" />
        <p>100 ETK</p>
      </section>
    </div>
  );
};

export default Header;
