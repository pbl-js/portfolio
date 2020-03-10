import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>Siemanko</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
