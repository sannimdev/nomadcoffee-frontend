import styled from 'styled-components';

const SAvatar = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    background: ${(props) => `no-repeat center url('${props?.src}')`};
    background-size: cover;
`;

const defaultAvatar =
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80';

function Avatar({ src }) {
    return <SAvatar src={src || defaultAvatar} />;
}

export default Avatar;
