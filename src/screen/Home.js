import { useNavigate } from 'react-router-dom';
import { LogUserOut } from '../apollo';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => LogUserOut(navigate)}>Logout</button>
        </div>
    );
}
export default Home;
