import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "./reducers/reduser";
import { apiUser } from "./queries/apiUser";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [apiUser.reducerPath]: apiUser.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiUser.middleware),
});
setupListeners(store.dispatch);
