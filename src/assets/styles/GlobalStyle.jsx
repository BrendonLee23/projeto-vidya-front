import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
    }
    input {
        :focus {
            border: 2px solid #c6c5c5;
            margin: 0px;
        }
    }
`

export default GlobalStyle;