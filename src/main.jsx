// @packages
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// @app
import { store } from "./redux/store";

// @own
import App from "components/App";
import "styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
