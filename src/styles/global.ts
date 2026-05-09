import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
     font-family: ${({ theme }) => theme.typography.font};
     background-color: ${({theme}) => theme.colors.body};
     color: ${({theme}) => theme.colors.paragraph};
 }
`;
