import styled from 'styled-components';

const SCardError = styled.p`
    color: ${(props) => props.theme.error};
`;

function CardError({ message }) {
    return <SCardError>{message}</SCardError>;
}
export default CardError;
