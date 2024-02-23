import {setnewmsg} from './SelectContactSlice/sContact'
import { setSelectedContactMsg } from './ContactList/cList';

export const actioncreater = (obj)=>{
    return (dispatch)=>{
        dispatch(setnewmsg(obj));
    }
}

export const actioncreater1 = (obj)=>{
    return (dispatch)=>{
        dispatch(setSelectedContactMsg(obj));
    }
}
