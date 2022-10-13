import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "./reducers/reduser";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
setupListeners(store.dispatch);
