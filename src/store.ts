import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import popup from "./redux/popupSlice";

export const store = configureStore({
    reducer:{
        popup
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;







