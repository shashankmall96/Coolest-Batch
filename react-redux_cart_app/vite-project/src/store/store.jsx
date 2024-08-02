import { configureStore } from "@reduxjs/toolkit";

import cartReducer from  "../store/cartSlice";
import productReducer from "./productSlice";


const store = configureStore({
    reducer : {
    cart : cartReducer,
    product : productReducer
    }
})


export default store