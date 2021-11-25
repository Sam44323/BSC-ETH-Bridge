import React from "react";
import styles from "./App.module.scss";
import BridgeContainer from "./container/BridgeContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className={styles.HeaderContainer}>
        <h1>Bridge</h1>
      </section>
      <BridgeContainer />
    </div>
  );
};

export default App;
