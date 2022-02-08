import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const KEY_TOKEN = 'token';
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

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
