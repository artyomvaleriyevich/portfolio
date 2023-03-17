import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import popup from "./redux/popupSlice";
import burger from "./redux/burgerSlice";

export const store = configureStore({
    reducer:{
        popup,
        burger
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;







