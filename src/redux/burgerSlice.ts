import {createSlice} from "@reduxjs/toolkit";
interface IInitialState {
    status: boolean
}
const initialState: IInitialState = {
    status: false
}
const burgerSlice = createSlice({
    name:'@@burger',
    initialState,
    reducers: {
        openBurger:(state)=>{
            state.status = true
        },
        closeBurger:(state)=>{
            state.status = false
        }
    }
})

export const {openBurger,closeBurger} = burgerSlice.actions
export default burgerSlice.reducer



