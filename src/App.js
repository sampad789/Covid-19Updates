import { createGlobalStyle } from "styled-components";

import React from "react";
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <h2>Worldwide Stats of COVID-19 Virus: </h2>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
    </div>
  );
}
