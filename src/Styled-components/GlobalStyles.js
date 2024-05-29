import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
body{
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    min-height:100vh;
    font-size:16px;
    line-height: 1.5;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: hsl(205, 33%, 90%);
}
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
html{
    font-size:62.5%
}
`;
