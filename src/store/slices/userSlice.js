import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    onauth: null,
    email: null,
    firstname: null,
    lastname: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.onauth = 1;
            state.email = action.payload.email;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.onauth = null;
            state.email = null;
            state.firstname = null;
            state.lastname = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
