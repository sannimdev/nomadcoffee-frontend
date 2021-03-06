import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Background from '../components/auth/Background';
import Container from '../components/auth/Container';
import Wrapper from '../components/auth/Wrapper';
import Input from '../components/auth/Input';
import ErrorInline from '../components/auth/ErrorInline';
import { NormalButton, PrimaryButton, Separator, Title } from '../components/auth/shared';
import HelmetTitle from '../components/HelmetTitle';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AlertBox from '../components/auth/AlertBox';
import routes from '../routes';

const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $email: String!
        $name: String!
        $password: String!
        $githubUsername: String
    ) {
        createUser(
            username: $username
            email: $email
            name: $name
            password: $password
            githubUsername: $githubUsername
        ) {
            ok
            error
        }
    }
`;

function SignUp() {
    const navigate = useNavigate();
    const { register, watch, formState, setError, clearErrors, handleSubmit, getValues } = useForm({
        mode: 'onChange',
    });
    const { isValid, errors } = formState;
    watch();

    const clearError = () => {
        clearErrors('result');
    };

    const onCompleted = (data) => {
        const { username, password } = getValues();
        const {
            createUser: { ok, error },
        } = data;
        if (!ok) return setError('result', { message: error });
        navigate(routes.home, { state: { username, password } });
    };
    const [createUser, { loading, error }] = useMutation(CREATE_USER, { onCompleted });
    const onSubmitValid = (data) => {
        if (!loading) createUser({ variables: { ...data } });
    };

    return (
        <Background>
            <HelmetTitle title="Login" />
            <Container>
                <Title>Nomad Coffee</Title>
                <Wrapper>
                    <form onSubmit={handleSubmit(onSubmitValid /*, onSubmitInvalid */)}>
                        <Input
                            {...register('name', { required: '????????? ??????????????????' })}
                            type="text"
                            placeholder="??????"
                            onFocus={() => clearError()}
                            isError={!!errors?.name?.message}
                        />
                        <ErrorInline message={errors?.name?.message} />
                        <Input
                            {...register('email', { required: '????????? ????????? ??????????????????' })}
                            type="text"
                            placeholder="?????????"
                            onFocus={() => clearError()}
                            isError={!!errors?.email?.message}
                        />
                        <ErrorInline message={errors?.email?.message} />
                        <Input
                            {...register('username', {
                                required: '???????????? ??????????????????',
                                minLength: {
                                    value: 5,
                                    message: '???????????? 5??? ?????? ??????????????????',
                                },
                            })}
                            type="text"
                            placeholder="?????????"
                            onFocus={() => clearError()}
                            isError={!!errors?.username?.message}
                        />
                        <ErrorInline message={errors?.username?.message} />
                        <Input
                            {...register('password', { required: '??????????????? ???????????????' })}
                            type="password"
                            placeholder="????????????"
                            onFocus={() => clearError()}
                            isError={!!errors?.password?.message}
                        />
                        <ErrorInline message={errors?.password?.message} />
                        <Input
                            {...register('githubUsername')}
                            type="text"
                            placeholder="Github ??????"
                            onFocus={() => clearError()}
                        />
                        <ErrorInline message={'Github ???????????? ????????? ?????? ??? ????????????'} warning />
                        <AlertBox message={errors?.result?.message || error?.message} />
                        <PrimaryButton disabled={loading || !isValid}>????????????</PrimaryButton>
                        <Separator>??????</Separator>
                        <Link to={routes.home}>
                            <NormalButton>?????????</NormalButton>
                        </Link>
                    </form>
                </Wrapper>
            </Container>
        </Background>
    );
}

export default SignUp;
