import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import { ToastContainer } from "react-toastify";

const config: Config = {
  supportedChains: [ChainId.Rinkeby, 97],
};

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
