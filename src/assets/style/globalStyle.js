import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0 ;
    }
    body{
        font-family: sans-serif ;
    }

    :root {
        --primary: #4E46A9;
        --text-primary: #2222;
        --text-secundaty: #ccc;
    }
`;