import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* 
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Inter", sans-serif;
}
body 
{
    min-height: 100vh;
    max-height: auto;
    // background: linear-gradient( rgb(230, 200, 170), rgb(180, 140, 80), rgb(130, 80, 20) );
}
h2
{
    width: 100%;
    height: 3rem;
    margin: 1rem auto;
    padding: 0.6rem;
    background-color: bisque;
    text-align: center;
    color: green;
}
`;

export default GlobalStyle;