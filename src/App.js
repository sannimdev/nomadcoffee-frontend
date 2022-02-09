import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { client, darkModeVar, loggedInVar } from './apollo';
import routes from './routes';
import CoffeeShopAdd from './screen/CoffeeShopAdd';
import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import { darkModeTheme, GlobalStyles, lightModeTheme } from './styles';

/*
    [Error] 'Switch' is not exported from 'react-router-dom' 해결
    https://miracleground.tistory.com/entry/Error-Switch-is-not-exported-from-react-router-dom-%ED%95%B4%EA%B2%B0
*/
function App() {
    const isLoggedIn = useReactiveVar(loggedInVar);
    const isDarkMode = useReactiveVar(darkModeVar);
    return (
        <ApolloProvider client={client}>
            <HelmetProvider>
                <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
                    <GlobalStyles />
                    <Router>
                        <Routes>
                            <Route path="*" element={<h1>Not Found</h1>} />
                            <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
                            <Route path={routes.coffeeShopAdd} element={isLoggedIn ? <CoffeeShopAdd /> : <Login />} />
                            {!isLoggedIn && <Route path={routes.signUp} element={<SignUp />} />}
                        </Routes>
                    </Router>
                </ThemeProvider>
            </HelmetProvider>
        </ApolloProvider>
    );
}

export default App;
