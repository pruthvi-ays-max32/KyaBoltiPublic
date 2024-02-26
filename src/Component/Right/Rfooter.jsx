import React from 'react'
import { Box, IconButton, Grid } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { InputBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { actioncreater, actioncreater1 } from '../../app/Slices/actions'
import moment from 'moment';

export default function Rfooter() {
  var time = new Date();
  time = moment().format('LT');
  const dispatch = useDispatch();
  const tempmsg = { msg: '', time: '' }
  const [newmessage, setnewmessage] = useState(tempmsg)

  function handleOnClick (){
      if(newmessage.msg !==''){
        dispatch(actioncreater(newmessage));
        dispatch(actioncreater1(newmessage));
        setnewmessage(tempmsg)
      }     
  }

  return (
    <Grid width={'100%'} alignItems={"center"} display={'flex'} justifyContent={'space-between'} sx={{ alignItems: 'center' }} >
      <Box textAlign={'start'} display={'flex'} flexDirection={'row'} mt={1}>
        <IconButton>
          <InsertEmoticonIcon sx={{ justifyItems: "center", color: "white" }} />
        </IconButton>

        <IconButton>
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      <Box width={"80%"} textAlign={"center"}>
        <InputBase value={newmessage.msg} placeholder={'  Type A Message'} sx={{ width: '100%', color: 'white', bgcolor: "#2A3942", border: '0.5px solid grey', borderRadius: '6px' }} onChange={(e) => {
          setnewmessage({ msg: e.target.value, time: time })
        }}>
        </InputBase>
      </Box>

      <Box display={'flex'} flexDirection={'row'}>
        <IconButton onClick={handleOnClick}>
          <SendIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Grid>
  )
}
