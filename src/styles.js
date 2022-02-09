import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const palette = {
    white: '#fff',
    almostWhite: '#e7e7e7',
    lightGray: 'rgb(204, 204, 204)',
    gray: '#757575',
    red: '#ef5350',
    yellow: '#fee500',
    error: '#e65f3e',
    primary: '#09addb',
    black: '#333',
};

export const transition = {
    cubicBezier: `cubic-bezier(0, 1.21, 1, 1)`,
};

export const lightModeTheme = {
    ...palette,
    ...transition,
    color: '#191919',
    borderColor: '#dbdbdb',
    background: palette.white,
    error: palette.red,
};

export const darkModeTheme = {
    ...palette,
    ...transition,
    color: palette.almostWhite,
    borderColor: palette.gray,
    background: palette.black,
    error: palette.yellow,
};

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700;900&display=swap');
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color: ${(props) => props.theme.background};
        font-size:14px;
        font-family:'Noto Sans KR', sans-serif !important;
        color: ${(props) => props.theme.color};
        letter-spacing: -0.34px;
        transition: color 0.2s linear, background-color 0.5s linear, border-color 0.5s linear;
    }
    a {
      text-decoration: none;
      color: inherit !important;
    }
`;
