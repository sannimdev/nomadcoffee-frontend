import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper';
import HeaderPrimary from './HeaderPrimary';

const SHeader = styled.header`
    width: 100%;
    height: 200px;
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

function Header({ gnbList = [] }) {
    return (
        <SHeader>
            <ContentWrapper>
                <HeaderPrimary />
            </ContentWrapper>
            <Gnb>
                <ContentWrapper>
                    <GnbMenu>
                        {/* <li className="active">고정</li> */}
                        {gnbList.map((menu, idx) => (
                            <li key={idx} className="active">
                                {menu}
                            </li>
                        ))}
                    </GnbMenu>
                </ContentWrapper>
            </Gnb>
        </SHeader>
    );
}
export default Header;
