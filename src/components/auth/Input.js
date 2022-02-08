import { darken } from 'polished';
import styled, { css } from 'styled-components';

const Input = styled.input`
    border-top: 0 none;
    border-right: 0 none;
    border-left: 0 none;
    border-bottom: 1.8px solid;
    border-bottom-color: ${(props) => {
        const { isError } = props;
        const color = isError ? props.theme.yellow : darken(0.16, props.theme.lightGray);
        return css`
            ${color}
        `;
    }};
    padding: 15px 8px 8px 10px;
    margin: 4px 0;
    color: ${(props) => props.theme.almostWhite};

    transition: border 0.2s linear;
    &:focus {
        border-bottom-color: ${(props) => (props.isError ? `none` : props.theme.almostWhite)};
    }

    ::placeholder {
        color: ${(props) => darken(0.08, props.theme.almostWhite)};
    }
`;

export default Input;
