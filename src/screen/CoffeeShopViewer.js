import { gql, useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { faEraser, faPlus, faTrash, faXRay } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { gnbListVar } from '../apollo';
import HelmetTitle from '../components/HelmetTitle';
import CardContainer from '../components/home/cafe/add/CardContainer';
import CardInputForms from '../components/home/cafe/add/CardInputForms';
import ContentWrapper from '../components/home/ContentWrapper';
import Header from '../components/home/header';
import Container from '../components/home/header/Container';
import { IconButton } from '../components/home/shared';
import routes from '../routes';

const QUERY_SEE_COFFEESHOP = gql`
    query ($seeCoffeeShopId: Int!) {
        seeCoffeeShop(id: $seeCoffeeShopId) {
            name
            longitude
            latitude
        }
    }
`;

const ButtonContainer = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    & > li:not(:first-child) {
        margin-right: 10px;
    }
`;

function CoffeeShopViewer(props) {
    const themeContext = useContext(ThemeContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const gnbList = useReactiveVar(gnbListVar);
    const { register, handleSubmit, watch, formState, setError, clearErrors, setValue } = useForm({
        mode: 'onChange',
    });
    const onCompleted = () => {
        const elements = ['name', 'latitude', 'longitude'];
        elements.forEach((name) => setValue(name, data?.seeCoffeeShop[name]));
    };
    const { loading, data } = useQuery(QUERY_SEE_COFFEESHOP, {
        variables: { seeCoffeeShopId: parseInt(id) },
        onCompleted,
    });
    const { isValid, errors } = formState;
    const clearError = () => clearErrors('result');
    watch();
    // const onCompleted = (data) => {
    //     const {
    //         createCoffeeShop: { ok, error },
    //     } = data;
    //     if (!ok) {
    //         return setError('result', { message: error });
    //     }
    //     return navigate(routes.home);
    // };
    const error = { message: '샘플' };
    const onSubmitValid = (data) => {
        // if (!loading) ({ variables: { ...data, Header } });
    };

    return (
        <Container>
            <HelmetTitle title={`${data?.seeCoffeeShop?.name || '카페'} 관리`} />
            <Header gnbList={gnbList} />
            <ContentWrapper>
                <CardContainer>
                    <h2>{data?.seeCoffeeShop?.name}</h2>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <CardInputForms
                            register={register}
                            errors={errors}
                            clearError={clearError}
                            resultMessage={errors?.reesult?.message || error?.message}
                        />
                        <ButtonContainer>
                            <li>
                                <IconButton
                                    icon={faTrash}
                                    onClick={() => alert('삭제')}
                                    disabled={!isValid || errors?.result?.message}
                                    color={themeContext.error}
                                >
                                    삭제하기
                                </IconButton>
                            </li>
                            <li>
                                <IconButton
                                    icon={faEraser}
                                    type="submit"
                                    disabled={!isValid || errors?.result?.message}
                                >
                                    수정하기
                                </IconButton>
                            </li>
                        </ButtonContainer>
                    </form>
                </CardContainer>
            </ContentWrapper>
        </Container>
    );
}
export default CoffeeShopViewer;
