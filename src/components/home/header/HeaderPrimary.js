// 헤더 첫째 줄
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../../../routes';
import HeaderMenu from './HeaderMenu';
import SearchBox from './SearchBox';

const SHeaderPrimary = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: -0.1rem;
        user-select: none;
        cursor: pointer;
    }
`;

function HeaderPrimary() {
    return (
        <SHeaderPrimary>
            <h1>
                <Link to={routes.home}>Nomad Coffee</Link>
            </h1>
            <div style={{ display: 'flex' }}>
                <SearchBox />
                <HeaderMenu />
            </div>
        </SHeaderPrimary>
    );
}

export default HeaderPrimary;
