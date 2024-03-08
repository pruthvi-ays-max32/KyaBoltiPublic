import { configureStore, combineReducers} from "@reduxjs/toolkit";

import sContact from './Slices/SelectContactSlice/sContact'
import contactState from './Slices/ContactList/cList'

// import logger from "redux-logger";

const rootReducer = combineReducers({
    sContact : sContact,
    contactState : contactState,
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})