import { gql, useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { faEraser, faTrash } from '@fortawesome/free-solid-svg-icons';
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
import useUser from '../hooks/useUser';
import routes from '../routes';

export const SEE_COFFEESHOP_QUERY = gql`
    query SeeCoffeeShop($id: Int!) {
        seeCoffeeShop(id: $id) {
            name
            longitude
            latitude
            isMine
        }
    }
`;

const MUTATION_EDIT_COFFEESHOP = gql`
    mutation editCoffeeShop($id: Int!, $name: String!, $latitude: String, $longitude: String) {
        editCoffeeShop(id: $id, name: $name, latitude: $latitude, longitude: $longitude) {
            ok
            error
        }
    }
`;

const MUTATION_DELETE_COFFEESHOP = gql`
    mutation deleteCoffeeshop($id: Int!) {
        deleteCoffeeShop(id: $id) {
            ok
            error
        }
    }
`;

const ButtonContainer = styled.ul`
    display: ${(props) => (props.isMine ? 'flex' : 'none')};
    flex-direction: row-reverse;
    & > li:not(:first-child) {
        margin-right: 10px;
    }
`;

function CoffeeShopViewer() {
    const themeContext = useContext(ThemeContext);
    const { id } = useParams();
    // const { data: userData } = useUser();
    const navigate = useNavigate();
    const goHome = () => {
        navigate(routes.home);
        // window.location.reload();
    };

    const gnbList = useReactiveVar(gnbListVar);
    const { register, watch, formState, setError, clearErrors, setValue, getValues } = useForm({
        mode: 'onChange',
    });
    const { errors } = formState;

    const onLoadCompleted = (data) => {
        if (!data?.seeCoffeeShop?.name) navigate(-1);

        const elements = ['name', 'latitude', 'longitude'];
        elements.forEach((name) => setValue(name, data?.seeCoffeeShop[name]));
    };
    const { loading, data } = useQuery(SEE_COFFEESHOP_QUERY, {
        variables: { id: parseInt(id) },
        onCompleted: onLoadCompleted,
    });

    const clearError = () => clearErrors('result');
    watch();

    const onUpdateMutation = (cache, result) => {
        // TODO: 여기 나중에 손좀 볼 것
        const {
            data: {
                editCoffeeShop: { ok, error },
            },
        } = result;
        if (!ok) {
            return setError('result', { message: error });
        }
        const { name, latitude, longitude } = getValues();
        // const { me: user } = userData;
        // modify를 하면 수정은 잘 반영되나 다시 수정할 떄 modify is not function 오류 발생
        // // cache.modify({
        // //     id: `CoffeeShop:${id}`,
        // //     fields: {
        // //         name: () => name,
        // //         latitude: () => latitude,
        // //         longitude: () => longitude,
        // //         user: { ...user },
        // //     },
        // // });
        cache.writeQuery({
            query: gql`
                query SeeCoffeeShop($id: Int!) {
                    seeCoffeeShop(id: $id) {
                        name
                        longitude
                        latitude
                        isMine
                    }
                }
            `,
            data: {
                seeCoffeeShop: {
                    __typename: 'CoffeeShop',
                    id,
                    name,
                    latitude,
                    longitude,
                    isMine: true,
                },
            },
            variables: { id },
        });
        goHome();
    };
    const [editCoffeeShop, { loading: updateMutationLoading, error }] = useMutation(MUTATION_EDIT_COFFEESHOP, {
        update: onUpdateMutation,
        refetchQueries: [{ query: SEE_COFFEESHOP_QUERY, variables: { id: parseInt(id) } }],
    });
    const onSubmit = (event) => {
        event.preventDefault();
        if (!updateMutationLoading) editCoffeeShop({ variables: { id: parseInt(id), ...getValues() } });
    };
    const onDeleteCoffeeShop = (cache, result) => {
        const {
            data: {
                deleteCoffeeShop: { ok },
            },
        } = result;
        if (!ok) {
            goHome();
            return;
        }
        cache.evict({ id: `CoffeeShop:${id}` });
        // 오류 관계없이 밖으로 나가기
        goHome();
    };
    const [deleteCoffeeShop, { loading: deleteMutationLoading }] = useMutation(MUTATION_DELETE_COFFEESHOP, {
        variables: { id: parseInt(id) },
        update: onDeleteCoffeeShop,
    });
    const onDelete = () => {
        if (!deleteMutationLoading) deleteCoffeeShop();
    };

    return (
        <Container>
            <HelmetTitle title={`${data?.seeCoffeeShop?.name || '카페'} 관리`} />
            <Header gnbList={gnbList} />
            <ContentWrapper>
                <CardContainer>
                    <h2>{loading ? '불러오는 중...' : data?.seeCoffeeShop?.name}</h2>
                    {loading ? (
                        <div></div>
                    ) : (
                        <form onSubmit={onSubmit}>
                            <CardInputForms
                                register={register}
                                errors={errors}
                                clearError={clearError}
                                resultMessage={errors?.reesult?.message || error?.message}
                                isMine={data?.seeCoffeeShop?.isMine}
                            />
                            <ButtonContainer isMine={data?.seeCoffeeShop?.isMine}>
                                <li onClick={onDelete}>
                                    <IconButton type="button" icon={faTrash} color={themeContext.error}>
                                        삭제하기
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton
                                        icon={faEraser}
                                        type="submit"
                                        disabled={!getValues('name') || errors?.result?.message}
                                    >
                                        수정하기
                                    </IconButton>
                                </li>
                            </ButtonContainer>
                        </form>
                    )}
                </CardContainer>
            </ContentWrapper>
        </Container>
    );
}
export default CoffeeShopViewer;
