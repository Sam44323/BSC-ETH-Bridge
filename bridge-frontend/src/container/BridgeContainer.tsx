import React from "react";
import styles from "../styles/container/BridgeContainer.module.scss";
import Dropdown from "../components/Dropdown";

const BridgeContainer: React.FC = () => {
  const [currValue, setCurrValue] = React.useState<{
    left: "ETH" | "BSC";
    right: "ETH" | "BSC";
  }>({
    left: "ETH",
    right: "BSC",
  });

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
