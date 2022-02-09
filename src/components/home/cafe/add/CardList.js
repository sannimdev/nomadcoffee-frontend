import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import CardInputItem from './CardInputItem';

const SCardInputForms = styled.ul`
    margin: 40px 0;
`;
const CardItemName = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    &::after {
        ${(props) =>
            props['data-is-required'] &&
            css`
                margin-left: 3px;
                font-size: 1.2rem;
                font-weight: bold;
                color: ${props.theme.error};
                content: '*';
            `}
    }
`;
const CardInput = styled.input`
    cursor: text;
    font-size: 1.2rem;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border: 2px solid ${(props) => lighten(0.08, props.theme.borderColor)};
    border-radius: 5px;

    transition: border-color 0.2s linear;
    &:focus {
        border-color: ${(props) => props.theme.primary};
    }
    &.error {
        border-color: ${(props) => props.theme.error};
    }
`;
const CardError = styled.p`
    color: ${(props) => props.theme.error};
`;

function CardInputForms() {
    return (
        <SCardInputForms>
            <CardInputItem>
                <label>
                    <CardItemName data-is-required>카페 이름</CardItemName>
                    <CardInput placeholder="카페 이름" />
                    <CardError>필수 입력 항목입니다.</CardError>
                </label>
            </CardInputItem>
            <CardInputItem>
                <label>
                    <CardItemName>위도</CardItemName>
                    <CardInput placeholder="지금은 입력하지 않아도 됩니다" />
                </label>
            </CardInputItem>
            <CardInputItem>
                <label>
                    <CardItemName>경도</CardItemName>
                    <CardInput placeholder="지금은 입력하지 않아도 됩니다" />
                </label>
            </CardInputItem>
        </SCardInputForms>
    );
}
export default CardInputForms;
