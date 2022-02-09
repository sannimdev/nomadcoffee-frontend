import styled from 'styled-components';

const SCardContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
`;

function CardContainer({ children }) {
    return <SCardContainer>{children}</SCardContainer>;
}
export default CardContainer;
