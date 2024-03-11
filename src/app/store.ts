import { configureStore, combineReducers} from "@reduxjs/toolkit";

import sContact from './Slices/SelectContactSlice/sContact.ts'
import contactState from './Slices/ContactList/cList.ts'

// import logger from "redux-logger";

const rootReducer = combineReducers({
    sContact : sContact,
    contactState : contactState,
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})