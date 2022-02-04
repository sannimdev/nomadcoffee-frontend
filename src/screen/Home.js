import { loggedInVar } from '../apollo';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => loggedInVar(false)}>Logout</button>
        </div>
    );
}
export default Home;
