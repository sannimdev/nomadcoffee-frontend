import { faLockOpen, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LogUserOut } from '../apollo';
import Container from '../components/home/Container';

const Header = styled.header`
    width: 100%;
    height: 200px;
`;

const HeaderPrimary = styled.div`
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

const HeaderMenu = styled.ul`
    use-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
        cursor: pointer;
        &:not(:first-child) {
            margin-left: 1rem;
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

const ContentWrapper = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
`;

const Gnb = styled.nav`
    width: 100%;
    height: 50px;

    border-top: 1px solid ${(props) => props.theme.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const GnbMenu = styled.ul`
    display: flex;
    align-items: center;
    font-weight: 600;
    & > li {
        position: relative;
        height: 100%;
        user-select: none;
        cursor: pointer;
        padding: 16px 0;
        margin: 0 15px;
        min-width: 10px;
        height: 100%;

        &::after {
            position: absolute;
            bottom: -3px;
            left: -15px;
            display: block;
            content: '';
            width: 0;
            padding: 0 15px;
            height: 3px;
            background-color: transparent;
            transition: color 0.2s linear;
        }
        &.active {
            color: ${(props) => props.theme.primary};
            &::after {
                width: 100%;
                background-color: ${(props) => props.theme.primary};
            }
        }
        &:hover {
            color: ${(props) => props.theme.primary};
        }
    }
`;

const SearchBox = styled.div``;

const SearchInput = styled.input``;

const Button = styled.button`
    cursor: pointer;
    height: 40px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    padding: 0 15px;
    font-size: 1.05rem;
    font-weight: 600;
    border-radius: 5px;

    transition: background-color 0.2s linear;
    &:active,
    &:focus {
        outline: none;
        border: none;
    }
    &:hover {
        background-color: ${(props) => darken(0.05, `${props.theme.primary}`)};
    }

    & > *:not(:first-child) {
        margin-left: 10px;
    }
`;

function Home() {
    const navigate = useNavigate();
    const gnbList = ['카페', '김밥', '맛집', '핸드폰', '커뮤니티', '사오정', '헤어/뷰티'];
    return (
        <Container>
            <Header>
                <ContentWrapper>
                    <HeaderPrimary>
                        <h1>Nomad Coffee</h1>
                        <SearchBox>
                            <SearchInput />
                        </SearchBox>
                        <HeaderMenu>
                            <li>
                                <HeaderMenuIcon onClick={() => LogUserOut(navigate)}>
                                    <FontAwesomeIcon icon={faLockOpen} size="lg">
                                        <span>로그아웃</span>
                                    </FontAwesomeIcon>
                                </HeaderMenuIcon>
                            </li>
                            <li>
                                <Button>
                                    <FontAwesomeIcon icon={faPen} size="sm">
                                        <span onClick={() => LogUserOut(navigate)}>로그아웃</span>
                                    </FontAwesomeIcon>
                                    <span>매장등록</span>
                                </Button>
                            </li>
                        </HeaderMenu>
                    </HeaderPrimary>
                </ContentWrapper>
                <Gnb>
                    <ContentWrapper>
                        <GnbMenu>
                            <li className="active">고정</li>
                            {gnbList.map((menu, idx) => (
                                <li key={idx}>{menu}</li>
                            ))}
                        </GnbMenu>
                    </ContentWrapper>
                </Gnb>
            </Header>
            {/* <button }>Logout</button> */}
        </Container>
    );
}
export default Home;
