import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import {useSelector} from 'react-redux';

export default function ChatDisp() {
  const selectedContact = useSelector((state)=>state.selectedContact.sContact)
  const messages = selectedContact.messages;

  const contactState = useSelector((state) => state.contactState.contacts);
  // console.log(contactState)

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
