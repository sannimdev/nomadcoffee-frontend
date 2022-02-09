import styled from 'styled-components';

const SCardInputItem = styled.li`
    padding: 20px 0 0;
`;

function CardInputItem({ children }) {
    return <SCardInputItem>{children}</SCardInputItem>;
}
export default CardInputItem;
