import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    height: 40px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    padding: 0 15px;
    font-size: 1.05rem;
    font-weight: 600;
    border-radius: 5px;

    transition: background-color 0.2s linear;
    &:active,
    &:focus {
        outline: none;
        border: none;
    }
    &:hover {
        background-color: ${(props) => darken(0.05, `${props.theme.primary}`)};
    }

    & > *:not(:first-child) {
        margin-left: 10px;
    }
`;
