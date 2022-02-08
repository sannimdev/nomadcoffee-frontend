import styled from 'styled-components';

const SAlertBox = styled.div`
    user-select: none;
    color: ${(props) => props.theme.almostWhite};
    font-size: 0.8rem;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    text-align: center;
    margin: 20px 0;
    transition: all 0.2s linear;
    border-radius: 5px;
    opacity: ${({ isNull }) => (isNull ? `0%` : `100%`)};
`;

function AlertBox({ message }) {
    return !!message && <SAlertBox isNull={!message}>{message}</SAlertBox>;
}

export default AlertBox;
