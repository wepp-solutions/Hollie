import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-height: 100%;
        min-width: 100%;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: #333;
    }
    button {
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
        color: #333;
    }
`
