import React from "react";
import styles from "./App.module.scss";
import BridgeContainer from "./container/BridgeContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <section className={styles.HeaderContainer}>
        <h1>
          Bridge
          <br /> <span>ETH</span>{" "}
          <FontAwesomeIcon
            icon={faArrowsAltH}
            style={{
              color: "#fff",
            }}
          />{" "}
          <span>BSC</span>
        </h1>
      </section>
      <BridgeContainer />
    </div>
  );
};

export default App;
