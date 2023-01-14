import { configureStore } from '@reduxjs/toolkit';

import imagerReducer from './imager.js';

export const store = configureStore({
    reducer: {  
        imager: imagerReducer,
    },
});