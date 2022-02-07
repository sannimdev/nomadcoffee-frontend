import { darken } from 'polished';
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    font-weight: 700;
    color: ${(props) => props.theme.black};
    border: 0;
    border-radius: 5px;
    height: 50px;
    line-height: 50px;

    margin: 20px 0;
    transition: background 0.5s ease-in-out;
`;

export const PrimaryButton = styled(Button)`
    width: 100%;
    background-color: ${(props) => (props.disabled ? props.theme.lightGray : props.theme.yellow)};
    &:active {
        background-color: ${(props) =>
            props.disabled ? darken(0.04, props.theme.lightGray) : darken(0.04, props.theme.yellow)};
    }
`;

export const NormalButton = styled(Button)`
    width: 100%;
    background-color: ${(props) => (props.disabled ? props.theme.lightGray : props.theme.almostWhite)};
    &:active {
        background-color: ${(props) =>
            props.disabled ? darken(0.04, props.theme.lightGray) : darken(0.04, props.theme.almostWhite)};
    }
`;

export const Separator = styled.span`
    &::before,
    &::after {
        display: inline-block;
        width: calc(50% - 21.9px);
        height: 1px;
        margin: 8px 5px;
        background-color: rgba(255, 255, 255, 0.4);
        vertical-align: top;
        content: '';
    }
    color: ${(props) => props.theme.white};
    font-size: 0.8rem;
`;

export const Title = styled.h1`
    user-select: none;
    font-size: 2rem;
    font-weight: 700;
    margin: 20px 0;
    color: ${(props) => props.theme.lightGray};
`;
