// import { setSelectedContactMsg } from './ContactList/cList';

// export const actioncreater = (msg)=>{
//     return (dispatch, getState)=>{
//         const contactState = getState().contactState.contacts
//         const sContact = getState().sContact.sContact
//         const index = contactState.findIndex((contact)=>contact.id===sContact)
//         const msgarr = [...contactState[index].messages]
//         msgarr.push(msg)
        
//         dispatch(setSelectedContactMsg({index, msgarr}));
//     }
// }
