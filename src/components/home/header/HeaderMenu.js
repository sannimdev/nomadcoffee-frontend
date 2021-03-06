import { useReactiveVar } from '@apollo/client';
import { faLockOpen, faMoon, faPen, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { darkModeVar, logUserOut, toggleDarkMode } from '../../../apollo';
import useUser from '../../../hooks/useUser';
import routes from '../../../routes';
import Avatar from '../../Avatar';
import { IconButton } from '../shared';

const SHeaderMenu = styled.ul`
    margin-left: 10px;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
        cursor: pointer;
        &:not(:first-child) {
            margin-left: 10px;
        }
    }
`;

const HeaderMenuIcon = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.05s linear;
    color: ${(props) => props.theme.gray};
    &:hover {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};
    }
    &:active {
        background-color: ${(props) => darken(0.1, props.theme.primary)};
        color: ${(props) => props.theme.white};
    }
    &:focus,
    &:active {
        outline: none;
    }
`;

function HeaderMenu() {
    const isDarkMode = useReactiveVar(darkModeVar);
    const { data } = useUser();
    const navigate = useNavigate();

    return (
        <SHeaderMenu>
            <li>
                <HeaderMenuIcon onClick={() => toggleDarkMode()}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg">
                        <span>야간모드</span>
                    </FontAwesomeIcon>
                </HeaderMenuIcon>
            </li>
            <li>
                <Avatar src={data?.me?.avatarURL} />
                {data?.avatarUURL}
            </li>
            <li>
                <HeaderMenuIcon onClick={() => logUserOut(navigate)}>
                    <FontAwesomeIcon icon={faLockOpen} size="lg">
                        <span>로그아웃</span>
                    </FontAwesomeIcon>
                </HeaderMenuIcon>
            </li>
            <li>
                <Link to={routes.coffeeShopAdd}>
                    <IconButton icon={faPen}>매장등록</IconButton>
                </Link>
            </li>
        </SHeaderMenu>
    );
}
export default HeaderMenu;
