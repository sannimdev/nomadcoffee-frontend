import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.theme.background}
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Container;
