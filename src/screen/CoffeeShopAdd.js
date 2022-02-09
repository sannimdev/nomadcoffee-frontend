import { gql, useMutation, useReactiveVar } from '@apollo/client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { gnbListVar } from '../apollo';
import HelmetTitle from '../components/HelmetTitle';
import CardContainer from '../components/home/cafe/add/CardContainer';
import CardInputForms from '../components/home/cafe/add/CardInputForms';
import ContentWrapper from '../components/home/ContentWrapper';
import Header from '../components/home/header';
import Container from '../components/home/header/Container';
import { IconButton } from '../components/home/shared';
import routes from '../routes';

const MUTATION_CREATE_COFFEESHOP = gql`
    mutation createCoffeeShop($name: String!, $latitude: String, $longitude: String) {
        createCoffeeShop(name: $name, latitude: $latitude, longitude: $longitude) {
            ok
            error
        }
    }
`;

function CoffeeShopAdd() {
    const navigate = useNavigate();
    const gnbList = useReactiveVar(gnbListVar);
    const { register, handleSubmit, watch, formState, setError, clearErrors } = useForm({ mode: 'onChange' });
    const { isValid, errors } = formState;
    const clearError = () => clearErrors('result');
    watch();
    const onCompleted = (data) => {
        const {
            createCoffeeShop: { ok, error },
        } = data;
        if (!ok) {
            return setError('result', { message: error });
        }
        return navigate(routes.home);
    };
    const [createCoffeeShop, { loading, error }] = useMutation(MUTATION_CREATE_COFFEESHOP, { onCompleted });
    const onSubmitValid = (data) => {
        if (!loading) createCoffeeShop({ variables: { ...data, Header } });
    };

    return (
        <Container>
            <HelmetTitle title={'카페 등록하기'} />
            <Header gnbList={gnbList} />
            <ContentWrapper>
                <CardContainer>
                    <h2>카페 등록하기</h2>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <CardInputForms
                            register={register}
                            errors={errors}
                            clearError={clearError}
                            resultMessage={errors?.reesult?.message || error?.message}
                        />
                        <IconButton icon={faPlus} type="submit" disabled={!isValid || errors?.result?.message}>
                            등록하기
                        </IconButton>
                    </form>
                </CardContainer>
            </ContentWrapper>
        </Container>
    );
}
export default CoffeeShopAdd;
