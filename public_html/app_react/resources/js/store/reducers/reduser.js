import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        'token': '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user.token = action.payload;
        }
    },
});

export const { login } = userSlice.actions;
export const userReducer = userSlice.reducer;
