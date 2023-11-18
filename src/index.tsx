import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WDQWBFD7",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
