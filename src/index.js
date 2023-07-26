import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.scss";
import App from "./App";
import store from "./redux/store";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
