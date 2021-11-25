import React from "react";
import styles from "../styles/container/BridgeContainer.module.scss";

const BridgeContainer: React.FC = () => {
  return (
    <div className={styles.BridgeContainer}>
      <section className={styles.HeaderContainer}>
        <h1>Bridge</h1>
      </section>
    </div>
  );
};

export default BridgeContainer;
