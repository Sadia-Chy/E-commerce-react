import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/redux/slices/CartSlice';
import productReducer from './Components/redux/slices/ProductSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});

export default store;