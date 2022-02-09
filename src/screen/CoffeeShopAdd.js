import { useReactiveVar } from '@apollo/client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { gnbListVar } from '../apollo';
import HelmetTitle from '../components/HelmetTitle';
import CardInputForms from '../components/home/cafe/add/CardInputForms';
import ContentWrapper from '../components/home/ContentWrapper';
import Header from '../components/home/header';
import Container from '../components/home/header/Container';
import { IconButton } from '../components/home/shared';

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
    const { register, handleSubmit, watch, formState } = useForm({ mode: 'onChange' });
    const { isValid, errors } = formState;
    watch();
    const onSubmitValid = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <HelmetTitle title={'카페 등록하기'} />
            <Header gnbList={gnbList} />
            <ContentWrapper>
                <CardContainer>
                    <h2>카페 등록하기</h2>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <CardInputForms register={register} errors={errors} />
                        <IconButton icon={faPlus} type="submit" disabled={!isValid}>
                            등록하기
                        </IconButton>
                    </form>
                </CardContainer>
            </ContentWrapper>
        </Container>
    );
}
export default CoffeeShopAdd;
