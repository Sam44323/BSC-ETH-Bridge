import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, Config, DAppProvider } from "@usedapp/core";

const config: Config = {
  supportedChains: [ChainId.Rinkeby, 97],
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
