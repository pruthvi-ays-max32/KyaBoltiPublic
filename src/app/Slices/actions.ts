import {setSelectedContactMsg} from './ContactList/cList.ts'
import { Dispatch } from '@reduxjs/toolkit'

interface Message {
    msg : string,
    time : string,
}

export function actioncreater (msg:Message) : any {
    // console.log("******************",typeof msg)
    return (dispatch:Dispatch, getState:any)=>{
        // console.log("aaaaaaaaaaaa", msg)
        const contactState : any= getState().contactState.contacts
        const sContact : number = getState().sContact.sContact
        const index : number = contactState.findIndex((contact : any)=>contact.id===sContact)
        const msgarr : Message[] = [...contactState[index].messages]
        // console.log(msgarr)
        msgarr.push(msg)     
        dispatch(setSelectedContactMsg({index, msgarr}));
    }
}