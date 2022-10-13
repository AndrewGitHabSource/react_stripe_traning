import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    filter: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, user) {
            state.users.push(user);
        },
        editUser(state, action) {
            state.users = state.users.filter(item => item.payload.id === action.payload).map((elem) => {
                elem.payload.name = 'Leo';

                return elem;
            });
        }
    },
});

export const { getUsers, addUser, editUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
