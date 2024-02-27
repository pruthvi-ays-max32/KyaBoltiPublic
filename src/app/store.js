import { configureStore } from "@reduxjs/toolkit";
import sContact from './Slices/SelectContactSlice/sContact'
import contactState from './Slices/ContactList/cList'
import logger from "redux-logger";
export const store = configureStore({
    reducer:{
        sContact : sContact,
        contactState : contactState,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})