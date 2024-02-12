import React from 'react'
import { Box, IconButton, Paper, TextField } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import {InputBase} from '@mui/material';




export default function Rfooter() {
  return (
    <Box width={'100%'} height={'12vh'} alignItems={"center"} bgcolor={'#1f2c33'} display={'flex'} justifyContent={'space-between'}>
        <Box textAlign={'start'}>
        <IconButton>
            <InsertEmoticonIcon sx={{
              color:"white"
            }}/>
          </IconButton>

          <IconButton>
            <AddIcon sx={{
              color:"white"
            }} />
          </IconButton>

          
        </Box>

        <Box width={"80%"} textAlign={"center"}>
          <InputBase  placeholder={'  Type A Message'} sx={{width:'100%', color:'white', bgcolor:"solid grey", border:'1px solid grey', borderRadius:'6px'}}></InputBase>
        </Box>

        <Box>     
          <IconButton>
            <KeyboardVoiceIcon sx={{
              color:"white"
            }} />
          </IconButton>
          
        <IconButton>
            <SendIcon sx={{
              color:"white"
            }} />
          </IconButton>
        </Box>
          
      
        </Box>
    
  
  )
}
