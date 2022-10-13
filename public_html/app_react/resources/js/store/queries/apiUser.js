import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL
    }),
    tagTypes: ['User'],
    entityTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page = 1) => `api?page=${page}`,
            providesTags: (result, error, arg) =>
                result ? [...result.users.map(({ id }) => ({ type: 'User', id })), 'User'] : ['User'],
        }),
        getUser: builder.query({
            query: (id) => `api/get-user?id=${id}`,
            providesTags: (result, error, arg) => {
                return [{ type: 'User', id: arg }];
            },
        }),
        saveUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/save`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/edit`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery, useSaveUserMutation, useUpdateUserMutation, onQueryStarted } = apiUser;
