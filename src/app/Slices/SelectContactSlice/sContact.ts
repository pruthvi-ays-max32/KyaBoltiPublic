import { createSlice } from "@reduxjs/toolkit";

interface Istate {
    sContact : any;
}

const initialState : Istate = {
    sContact : null,
}

export const sContactSlice = createSlice({
    name : "sContactSlice",
    initialState,
    reducers:{
        setsContact : (state, action)=>{
            state.sContact = action.payload
        }
    }
})

export const {setsContact} = sContactSlice.actions
export default sContactSlice.reducer