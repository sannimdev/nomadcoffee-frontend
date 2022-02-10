import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import routes from './routes';

const KEY_TOKEN = 'token';
const KEY_DARK_MODE = 'dark_mode';

export const loggedInVar = makeVar(!!localStorage.getItem(KEY_TOKEN));
export const LogUserIn = (token) => {
    localStorage.setItem(KEY_TOKEN, token);
    loggedInVar(true);
};
export const LogUserOut = (navigate) => {
    localStorage.removeItem(KEY_TOKEN);
    loggedInVar(false);
    navigate ? navigate('/', { state: null, replace: true }) : window.location.reload();
};

export const darkModeVar = makeVar(!!localStorage.getItem(KEY_DARK_MODE));
export const toggleDarkMode = () => {
    const isDarkMode = !!localStorage.getItem(KEY_DARK_MODE);
    darkModeVar(!isDarkMode);
    if (!isDarkMode) {
        localStorage.setItem(KEY_DARK_MODE, new Date().getTime());
    } else {
        localStorage.removeItem(KEY_DARK_MODE);
    }
};

export const gnbListVar = makeVar([
    {
        id: 1,
        name: '카페',
        path: routes.home,
    },
]);

// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            // authorization: token ? `Bearer ${token}` : '',
            token,
        },
    };
});

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
