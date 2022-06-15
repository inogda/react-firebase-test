import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    flag: 11111,
};
const flagSlice = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        removeFlag(state) {
            state.flag = null;
        },
    },
});

export const {removeFlag} = flagSlice.actions;

export default flagSlice.reducer;
