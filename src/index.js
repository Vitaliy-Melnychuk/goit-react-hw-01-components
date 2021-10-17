import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import App from "./App";
import { theme } from "./constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
