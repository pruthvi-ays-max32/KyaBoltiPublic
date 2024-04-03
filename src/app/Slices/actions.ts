import {setSelectedContactMsg} from './ContactList/cList.ts'
import { Dispatch } from '@reduxjs/toolkit'

interface Message {
    msg : string,
    time : string,
}

export function actioncreater (msg:Message) : any {
    return (dispatch:Dispatch, getState:any)=>{
        const contactState : any= getState().contactState.contacts
        const sContact : number = getState().sContact.sContact
        const index : number = contactState.findIndex((contact : any)=>contact.id===sContact)
        const msgarr : Message[] = [...contactState[index].messages]
        msgarr.push(msg)     
        dispatch(setSelectedContactMsg({index, msgarr}));
    }
}