import {configureStore} from '@reduxjs/toolkit';

import flagReducer from './slices/flagSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        flag: flagReducer,
        user: userReducer,
    }
});
