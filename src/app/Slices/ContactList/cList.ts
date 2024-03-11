import { createSlice } from "@reduxjs/toolkit";

interface Contacts {
    id : number,
    name : string,
    contactNo : string,
    messages : messages[]
};

interface messages {
    msg : string,
    time : string,
}

interface Istate {
    contacts : Contacts[],
}

const initialState : Istate = {
    contacts : 
        [{ id: 1, name: "Pratte", contactNo: "1182451480", messages: [{ msg: "Hello 😏", time: "12:00 AM" }] },
        { id: 2, name: "Hanumant", contactNo: "7219073846", messages: [{ msg: "Hii ", time: "3:59 AM" }, { msg: "Aaj chi kay progress", time: "4.00 AM" }] },
        { id: 3, name: "Panda", contactNo: "8787876692", messages: [{ msg: "Hey Panda .", time: "7:30 AM" }] },
        { id: 4, name: "Ayesha", contactNo: "1182451533", messages: [{ msg: "Kya chal raha he", time: "8:30 AM" }] },
        { id: 5, name: "Praneeth", contactNo: "7219000099", messages: [{ msg: "Mag Kas chalu ahe.", time: "9:30 AM" }] },
        { id: 6, name: "Vinay", contactNo: "8888886692", messages: [{ msg: "Patience is main ingredient to make a cup of Chai.", time: "12:30 AM" }] },
        { id: 7, name: "Abhishek", contactNo: "7289073841", messages: [{ msg: "we are just friends..", time: "3:30 AM" }] },
        { id: 8, name: "Yashu", contactNo: "8787676692", messages: [{ msg: "Hello Yashu", time: "5:30 AM" }] },
        { id: 9, name: "Vaishi", contactNo: "1182451433", messages: [{ msg: "Hii Vaishi", time: "8:30 AM" }] },
        { id: 10, name: "Shejal", contactNo: "7219070099", messages: [{ msg: "Office Kas Chalu.", time: "10:30 AM" }] }
    ]}

export const cListSlice = createSlice({
    name:"cList",
    initialState,
    reducers : {
        setSelectedContactMsg : (state, action) : any =>{   
            state.contacts[action.payload.index].messages = action.payload.msgarr
        }
    }
})

export const {setSelectedContactMsg} = cListSlice.actions
export default cListSlice.reducer