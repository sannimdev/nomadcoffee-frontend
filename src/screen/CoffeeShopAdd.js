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
import useUser from '../hooks/useUser';
import routes from '../routes';

const MUTATION_CREATE_COFFEESHOP = gql`
    mutation createCoffeeShop($name: String!, $latitude: String, $longitude: String) {
        createCoffeeShop(name: $name, latitude: $latitude, longitude: $longitude) {
            ok
            id
            error
        }
    }
`;

function CoffeeShopAdd() {
    const navigate = useNavigate();
    const { data: userData } = useUser();
    const gnbList = useReactiveVar(gnbListVar);
    const { register, handleSubmit, watch, formState, setError, clearErrors, getValues } = useForm({
        mode: 'onChange',
    });
    const { isValid, errors } = formState;
    const clearError = () => clearErrors('result');
    watch();
    const onCompleted = (cache, result) => {
        const {
            data: {
                createCoffeeShop: { ok, id, error },
            },
        } = result;
        if (!ok) {
            return setError('result', { message: error });
        }
        // cache 업데이트
        const { name, latitude = '', longitude = '' } = getValues();
        const user = userData?.me;
        console.log(user);
        const newCoffeeShop = {
            __typename: 'CoffeeShop',
            id,
            isMine: true,
            name,
            latitude,
            longitude,
            user: {
                ...user,
            },
        };
        cache.writeFragment({
            data: newCoffeeShop,
            fragment: gql`
                fragment NewCoffeeShop on CoffeeShop {
                    id
                    isMine
                    name
                    latitude
                    longitude
                    user {
                        username
                        avatarURL
                    }
                }
            `,
        });
        cache.modify({
            id: `ROOT_QUERY`,
            fields: {
                seeCoffeeShops: (prev) => [newCoffeeShop, ...prev],
            },
        });
        // const { seeCoffeeShops = [] } = cache.readQuery({ query: SEE_COFFEESHOPS_QUERY });
        navigate(routes.home);
        // window.location.reload();
    };
    const [createCoffeeShop, { loading, error }] = useMutation(MUTATION_CREATE_COFFEESHOP, { update: onCompleted });
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
                            isMine={true}
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
