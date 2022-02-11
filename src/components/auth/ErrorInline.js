import styled from 'styled-components';

const SErrorInline = styled.span`
    user-select: none;
    color: ${(props) => (!!props.warning ? props.theme.lightGray : props.theme.yellow)};
    padding: 3px 10px;
    font-size: 0.8rem;
`;

function ErrorInline({ message, warning }) {
    return <SErrorInline warning={warning}>{message}</SErrorInline>;
}

export default ErrorInline;
