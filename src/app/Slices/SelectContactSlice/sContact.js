import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sContact : null
}
export const sContactSlice = createSlice({
    name : "sContactSlice",
    initialState,
    reducers:{
        setsContact : (state, action)=>{
            state.sContact = action.payload
        },
        setnewmsg: (state,action)=>{
            state.sContact.messages.push(action.payload.newmessage)
        }
    }
})

export const {setsContact, setnewmsg} = sContactSlice.actions
export default sContactSlice.reducer