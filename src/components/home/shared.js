import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';
import styled from 'styled-components';

export const InitializedButton = styled.button`
    cursor: pointer;
    border: none;
    &:active,
    &:focus {
        outline: none;
        border: none;
    }
    background-color: transparent;
`;

export const Button = styled(InitializedButton)`
    height: 40px;
    background-color: ${(props) => props.color || props.theme.primary};
    color: ${(props) => props.theme.white};
    padding: 0 15px;
    font-size: 1.05rem;
    font-weight: 600;
    border-radius: 5px;

    transition: background-color 0.2s linear;
    &:hover {
        background-color: ${(props) =>
            props.color ? darken(0.05, props.color) : darken(0.05, `${props.theme.primary}`)};
    }

    & > *:not(:first-child) {
        margin-left: 10px;
    }

    &.disabled {
        background-color: ${(props) => (props.color ? darken(0.05, props.color) : darken(0.04, props.theme.lightGray))};
    }
`;

export const IconButton = ({ icon: faIconModule, label = '', children, disabled, color, type }) => {
    return (
        <Button disabled={disabled} className={disabled && 'disabled'} color={color} type={type}>
            <FontAwesomeIcon icon={faIconModule || faAddressCard} />
            <span>{label || children}</span>
        </Button>
    );
};
