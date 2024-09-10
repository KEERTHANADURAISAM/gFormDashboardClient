import { configureStore } from "@reduxjs/toolkit";
import { userRegister } from "../slices/userAuth";


export const store = configureStore({
    reducer:{
user:userRegister
    }
})