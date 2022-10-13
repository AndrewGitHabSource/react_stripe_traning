import { $http } from "../api";

export const getProducts = async (page) => {
    return await $http.get('api/', {
        "params": {page},
    });
}


export const getUsers = async (page) =>  {
    return await $http.get('api/', {
        "params": {page},
    });
}

export const getUser = async (id) =>  {
    return await $http.get('api/get-user', {
        "params": {id},
    });
}

export const saveUser = async (user) => {
    return await $http.post('api/save', user);
}

export const editUser = async (user) => {
    return await $http.post('api/edit', user);
}

export const getStripeIntent = async (user) => {
    return await $http.post('api/order', {user});
}
