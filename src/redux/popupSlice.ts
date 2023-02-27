import {createSlice} from "@reduxjs/toolkit";
interface IInitialState {
    status: boolean
}
const initialState: IInitialState = {
    status: false
}
const popupSlice = createSlice({
    name:'@@popup',
    initialState,
    reducers: {
        openPopup:(state)=>{
            state.status = true
        },
        closePopup:(state)=>{
            state.status = false
        }
    }
})

export const {openPopup,closePopup} = popupSlice.actions
export default popupSlice.reducer



