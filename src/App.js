import React from "react";

import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";

import Header from "./sections/Header";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
