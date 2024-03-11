import { useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from '@reduxjs/toolkit';
import { setsContact } from '../../app/Slices/SelectContactSlice/sContact.ts';

export default function ChatDisp() {
  const params :any = useParams()
  const selectedContact : any = parseInt(params.id)
  console.log("888888", typeof selectedContact)

  const dispatch:Dispatch = useDispatch()

  useEffect(()=>{
    const id:number = selectedContact
    dispatch(setsContact(id))
    console.log(typeof id)

  })

  const contactState = useSelector((state : any) => state.contactState.contacts);
  const index = contactState.findIndex((contact : any)=>contact.id===selectedContact)
  const messages = [...contactState[index].messages]

  return (
    <Box m={2} display={'flex'} flexDirection={"row"} justifyContent={'flex-end'} maxWidth={"90%"} >
      <Box color={'white'}>
        {
          messages.map((message, index) => (
            <Box display={'flex'} justifyContent={"flex-end"} >       
                <Paper sx={{color:"#E9EDEF", bgcolor:"#0b846d", borderRadius:2, marginTop:1, width:"fit-content", float:"right"}}>
                  <Box display={'flex'} key={index}>
                    <Typography sx={{height:"fit-content", width:"fit-content", mr:1}} variant='body1' color={'white'}>{message.msg}</Typography>        
                    <Typography sx={{height:"auto", width:"auto", mt:1}} variant="caption" color={'whitesmoke'}>{message.time}</Typography>      
                  </Box>
                </Paper>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
