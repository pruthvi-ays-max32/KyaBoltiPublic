import React from 'react'
import { Box, IconButton, Paper, TextField, Grid } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import {InputBase} from '@mui/material';

import { useState } from 'react';


export default function Rfooter(props) {

function updateRply(e){
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",e)
  props.setrply(e.target.value)
}


  return (
    <Grid width={'100%'} alignItems={"center"}  display={'flex'} justifyContent={'space-between'} sx={{alignItems:'center'}} >
        <Box textAlign={'start'} display={'flex'} flexDirection={'row'} m={1}>
        <IconButton>
            <InsertEmoticonIcon sx={{
              justifyItems:"center",
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
          <InputBase  placeholder={'  Type A Message'} sx={{width:'100%', color:'white', bgcolor:"#2A3942", border:'0.5px solid grey', borderRadius:'6px'}} onChange={(e)=>{
              updateRply(e)
          }}></InputBase>
        </Box>

        <Box display={'flex'} flexDirection={'row'}>     
          {/* <IconButton>
            <KeyboardVoiceIcon sx={{
              color:"white"
            }} />
          </IconButton> */}
          
        <IconButton onClick={props.display}>
            <SendIcon sx={{
              color:"white"
            }} />
          </IconButton>
        </Box>   
        </Grid>
  )
}





// backgroundColor={"#202C33"} chat bg

// bgcolor={'#1f2c33'} footer