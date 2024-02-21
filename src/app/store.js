import { configureStore } from "@reduxjs/toolkit";
import selectedContact from './Slices/SelectContactSlice/sContact'
import contactState from './Slices/ContactList/cList'

export const store = configureStore({
    reducer:{
        selectedContact : selectedContact,
        contactState : contactState,
    }
})