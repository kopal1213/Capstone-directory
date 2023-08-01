import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Components/Redux/CartSlice'

export default configureStore ({
    reducer:{ 
        cart: cartReducer
    }
})