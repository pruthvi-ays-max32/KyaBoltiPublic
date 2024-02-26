import {setnewmsg} from './SelectContactSlice/sContact'
import { setSelectedContactMsg } from './ContactList/cList';

export const actioncreater = (msg)=>{
    return (dispatch)=>{
        dispatch(setnewmsg(msg));
    }
}

export const actioncreater1 = (msg)=>{
    return (dispatch, getState)=>{
        const contactlist = getState().contactState.contacts
        const sContact = getState().selectedContact.sContact
        const index = contactlist.findIndex((contact)=>contact.id===sContact.id)
        const msgarr = [...contactlist[index].messages]
        msgarr.push(msg)

        dispatch(setSelectedContactMsg({index, msgarr}));
    }
}
