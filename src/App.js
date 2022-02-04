import { useReactiveVar } from '@apollo/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, loggedInVar } from './apollo';
import Home from './screen/Home';
import Login from './screen/Login';
import { GlobalStyles } from './styles';

const lightModeTheme = {
    fontColor: '#f0f0f0',
    bgColor: '#303030',
};
const darkModeTheme = {
    fontcolor: '#303030',
    bgColor: '#f0f0f0',
};

function App() {
    const loggedIn = useReactiveVar(loggedInVar);
    const darkMode = useReactiveVar(darkModeVar);
    console.log(darkMode);
    return (
        <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
            <GlobalStyles />
            <button onClick={() => darkModeVar(!darkMode)}>{!darkMode ? 'To light' : 'To dark'}</button>
            <Router>
                <Routes>
                    <Route exact path='/' element={loggedIn ? <Home /> : <Login />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
