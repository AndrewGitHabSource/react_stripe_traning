import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_URL;

export const $http = axios.create({
    "baseURL": baseUrl,
    "headers": {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": window.Laravel.csrfToken,
        "X-Requested-With": "XMLHttpRequest",
    }
});
