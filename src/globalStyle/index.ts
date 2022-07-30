import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background-color:#444;
        font-family: sans-serif;
    }

    html, body, #root {
        height:100%;
        width:100%
    }

`;
