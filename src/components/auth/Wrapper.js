import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 480px;
    padding: 50px;
    flex-direction: column;
    border-radius: 5px;

    &:first-child {
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

export default Wrapper;
