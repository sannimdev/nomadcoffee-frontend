import styled from 'styled-components';

const SContentWrapper = styled.div`
    margin: 0 auto;
    width: 1120px;
    min-width: 1120px;
    display: flex;
    flex-direction: column;
`;

function ContentWrapper({ children }) {
    return <SContentWrapper>{children}</SContentWrapper>;
}
export default ContentWrapper;
