import { createGlobalStyle, DefaultTheme } from "styled-components";

interface GlobalStylesProps {
    theme: DefaultTheme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
@font-face {
    font-family: 'Ysabeau Infant';
    src: url('./assets/fonts/Roboto-Light.ttf') format('truetype');
}

body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.bg};
    font-family: ${props => props.theme.fonts.primaryFont};
    color: ${props => props.theme.colors.textColor};
}

#root{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
}

a{
    text-decoration: none;
}
`