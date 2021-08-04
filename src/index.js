import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "../src/estilos/GlobalStyle";
import Typography from "../src/estilos/Typography";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);
