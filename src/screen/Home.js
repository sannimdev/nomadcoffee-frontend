import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LogUserOut } from '../apollo';
import Container from '../components/home/Container';

const BackgroundWrapper = styled.div`
    /* background: url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')
        100% 50%;
    background-size: cover; */
`;

const Header = styled.header`
    /* background: rgba(0, 0, 0, 0.23); */
    /* color: ${(props) => props.theme.almostWhite}; */
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

function Home() {
    const navigate = useNavigate();
    const gnbList = ['카페', '김밥', '맛집', '핸드폰', '커뮤니티', '사오정', '헤어/뷰티'];
    return (
        <Container>
            <BackgroundWrapper>
                <Header>
                    <ContentWrapper>
                        <HeaderPrimary>
                            <h1>Nomad Coffee</h1>
                            <SearchBox>
                                <SearchInput />
                            </SearchBox>
                            <ul>
                                <li onClick={() => LogUserOut(navigate)}>로그아웃</li>
                                <li>매장 등록</li>
                            </ul>
                        </HeaderPrimary>
                    </ContentWrapper>
                    <Gnb>
                        <ContentWrapper>
                            <GnbMenu>
                                <li className="active">고정</li>
                                {gnbList.map((menu) => (
                                    <li>{menu}</li>
                                ))}
                            </GnbMenu>
                        </ContentWrapper>
                    </Gnb>
                </Header>
            </BackgroundWrapper>
            {/* <button }>Logout</button> */}
        </Container>
    );
}
export default Home;
