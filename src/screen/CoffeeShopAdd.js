import { useReactiveVar } from '@apollo/client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { gnbListVar } from '../apollo';
import HelmetTitle from '../components/HelmetTitle';
import CardInputForms from '../components/home/cafe/add/CardList';
import ContentWrapper from '../components/home/ContentWrapper';
import Header from '../components/home/header';
import Container from '../components/home/header/Container';
import { Button, IconButton } from '../components/home/shared';

const CardContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
`;

function CoffeeShopAdd() {
    const gnbList = useReactiveVar(gnbListVar);
    return (
        <Container>
            <HelmetTitle title={'카페 등록하기'} />
            <Header gnbList={gnbList} />
            <ContentWrapper>
                <CardContainer>
                    <h2>카페 등록하기</h2>
                    <form>
                        <CardInputForms />
                        <IconButton icon={faPlus}>등록하기</IconButton>
                    </form>
                </CardContainer>
            </ContentWrapper>
        </Container>
    );
}
export default CoffeeShopAdd;
