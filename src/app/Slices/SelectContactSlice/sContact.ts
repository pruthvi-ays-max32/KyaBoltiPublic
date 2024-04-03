import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
    sContact : null,
}

export const sContactSlice = createSlice({
    name : "sContactSlice",
    initialState,
    reducers:{
        setsContact : (state, action) : any=>{
            state.sContact = action.payload
        }
    }
})

export const {setsContact} = sContactSlice.actions
export default sContactSlice.reducer