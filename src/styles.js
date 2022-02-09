import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const palette = {
    white: '#fff',
    almostWhite: '#e7e7e7',
    lightGray: 'rgb(204, 204, 204)',
    gray: '#757575',
    borderColor: '#dbdbdb',
    yellow: '#fee500',
    error: '#e65f3e',
    primary: '#09addb',
    black: '#333',
};

export const lightModeTheme = {
    ...palette,
    color: '#191919',
    background: palette.white,
};

export const darkModeTheme = {
    ...palette,
    background: palette.black,
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
        background-color: #FAFAFA;
        font-size:14px;
        font-family:'Noto Sans KR', sans-serif !important;
        color: ${(props) => props.theme.color};
        letter-spacing: -0.34px;
    }
    a {
      text-decoration: none;
    }
`;
