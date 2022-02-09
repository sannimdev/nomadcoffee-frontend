const routes = {
    home: '/',
    coffeeShopAdd: '/add',
    signUp: '/signup',
    shop: {
        path: '/shop',
        route: '/shop/:id',
        getPath: (id) => `/shop/${id}`,
    },
};

export default routes;
