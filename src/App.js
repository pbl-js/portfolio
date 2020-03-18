import React, { useRef } from "react";

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
  const refs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };
  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop);
    // console.log(ref.current.offsetTop);
  };
  const executeScroll = ref => scrollToRef(ref);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header executeScroll={executeScroll} refs={refs} />
        <Aboutme forwardedRef={refs.aboutMe} />
        <Skills forwardedRef={refs.skills} />
        <Projects forwardedRef={refs.projects} />
        <Contact forwardedRef={refs.contact} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
