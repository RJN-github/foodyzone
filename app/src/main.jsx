import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
  padding: 0;
    margin: 0;
}
body{
  overflow-x: hidden;
}
`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
);
