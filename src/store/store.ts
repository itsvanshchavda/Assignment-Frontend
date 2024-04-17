

import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../slices/AuthSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector