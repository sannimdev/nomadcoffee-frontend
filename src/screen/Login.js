import { loggedInVar } from '../apollo';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => loggedInVar(true)}>Login</button>
        </div>
    );
}

export default Login;
