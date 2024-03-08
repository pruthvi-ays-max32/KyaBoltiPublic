import { CleaningServices } from '@mui/icons-material'
import {setSelectedContactMsg} from './ContactList/cList'
import { Dispatch } from '@reduxjs/toolkit'

interface Message {
    msg : string,
    time : string,
}

export const actioncreater = (msg:Message)=>{
    return (dispatch:Dispatch, getState:any)=>{
        console.log("aaaaaaaaaaaa")
        const contactState = getState().contactState.contacts
        const sContact : number = getState().sContact.sContact
        const index : number = contactState.findIndex((contact : any)=>contact.id===sContact)
        const msgarr : Message[] = [...contactState[index].messages]
        msgarr.push(msg)
        
        dispatch(setSelectedContactMsg({index, msgarr}));
    }
}