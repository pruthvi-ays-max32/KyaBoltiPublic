import { useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { setsContact } from '../../app/Slices/SelectContactSlice/sContact';

export default function ChatDisp() {
  const params :any = useParams()
  const selectedContact = parseInt(params.id)

  const dispatch = useDispatch()

  useEffect(()=>{
    const id = selectedContact
    dispatch(setsContact(id))
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
