import { gql, useMutation } from '@apollo/client';
import Background from '../components/auth/Background';
import Container from '../components/auth/Container';
import Wrapper from '../components/auth/Wrapper';
import Input from '../components/auth/Input';
import ErrorInline from '../components/auth/ErrorInline';
import { NormalButton, PrimaryButton, Separator, Title } from '../components/auth/shared';
import HelmetTitle from '../components/HelmetTitle';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import routes from '../routes';
import AlertBox from '../components/auth/AlertBox';
import { logUserIn } from '../apollo';

const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

function Login() {
    const location = useLocation();
    // React forms
    const { register, watch, formState, handleSubmit, setError, clearErrors } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: location?.state?.username || 'nomad',
            password: location?.state?.password || '1234',
        },
    });
    const { isValid, errors } = formState;
    watch();

    const clearError = () => {
        clearErrors('result');
    };

    // Apollo
    const onSubmitValid = (data) => {
        if (!loading) login({ variables: { ...data } });
    };

    const onCompleted = (data) => {
        const {
            login: { ok, error, token },
        } = data;
        if (!ok) return setError('result', { message: error });
        if (token) logUserIn(token);
    };
    const [login, { loading, error }] = useMutation(LOGIN_MUTATION, { onCompleted });

    return (
        <Background>
            <HelmetTitle title="Login" />
            <Container>
                <Title>Nomad Coffee</Title>
                <Wrapper>
                    <form onSubmit={handleSubmit(onSubmitValid /*, onSubmitInvalid */)}>
                        <Input
                            {...register('username', {
                                required: '아이디를 입력해주세요',
                                minLength: {
                                    value: 5,
                                    message: '아이디를 5자 이상 입력해주세요',
                                },
                            })}
                            type="text"
                            placeholder="아이디"
                            isError={!!errors?.username?.message}
                        />
                        <ErrorInline message={errors?.username?.message} />
                        <Input
                            {...register('password', { required: '비밀번호를 입력하세요' })}
                            type="password"
                            placeholder="비밀번호"
                            isError={!!errors?.password?.message}
                        />
                        <ErrorInline message={errors?.password?.message} />
                        <AlertBox message={errors?.result?.message || error?.message} />
                        <PrimaryButton onClick={clearError} disabled={loading || !isValid}>
                            로그인
                        </PrimaryButton>
                        <Separator>또는</Separator>
                        <Link to={routes.signUp}>
                            <NormalButton>회원가입</NormalButton>
                        </Link>
                    </form>
                </Wrapper>
            </Container>
        </Background>
    );
}

export default Login;
