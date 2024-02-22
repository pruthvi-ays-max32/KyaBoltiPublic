import { configureStore } from "@reduxjs/toolkit";
import selectedContact from './Slices/SelectContactSlice/sContact'
import contactState from './Slices/ContactList/cList'
import logger from "redux-logger";
export const store = configureStore({
    reducer:{
        selectedContact : selectedContact,
        contactState : contactState,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})