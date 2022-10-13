import { $http } from "../api";

export const getProducts = async (page) => {
    return await $http.get('api/', {
        "params": {page},
    });
}

export const getStripeIntent = async (user) => {
    return await $http.post('api/order', {user});
}

export const loginUser = async (user) => {
    return await $http.post('api/login', user);
}
