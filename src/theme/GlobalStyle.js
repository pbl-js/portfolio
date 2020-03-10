import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900&display=swap&subset=latin-ext');
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        /* Dzięki temu 1rem = 10px */
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Nunito', sans-serif;
        font-size: 1.6rem;
        background-color: #07142C;
        color: white;
        /* Ale nadal bazową wielkością fontu jest 16px */
    }
`;

export default GlobalStyle;
