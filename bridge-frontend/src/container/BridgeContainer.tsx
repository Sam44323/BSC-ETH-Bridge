import React from "react";
import styles from "../styles/container/BridgeContainer.module.scss";
import SwapContainer from "../components/SwapContainer";

const BridgeContainer: React.FC = () => {
  return (
    <div className={styles.BridgeContainer}>
      <section className={styles.SwapSection}>
        <div className={styles.SideContainers}></div>
        <div className={styles.SideContainers}></div>
      </section>
      <section className={styles.InputSection}></section>
    </div>
  );
};

export default BridgeContainer;
