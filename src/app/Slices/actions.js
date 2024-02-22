// import {setsContact, setnewmsg} from './SelectContactSlice/sContact'
// export function action1 () {
//     return(dispatch, getState){
//        const contactState = getState().contactState.contacts;
//        console.log(contactState)

//        dispatch(setnewmsg())
//     }
// }
import {setnewmsg} from './SelectContactSlice/sContact'
import { setSelectedContactMsg } from './ContactList/cList';

export const actioncreater = (obj)=>{
    return (dispatch)=>{
        dispatch(setnewmsg(obj));
        // dispatch(setSelectedContactMsg(obj));
    }
    
}
