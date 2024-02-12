import React from 'react'
import {Box} from '@mui/material'
import RAppBar from './Right/RAppBar'
import Rfooter from './Right/Rfooter'
import ChatDisp from './Right/ChatDisp'
export default function RightComponent() {
  return (
    <Box backgroundColor={"#1f2c33"} height={'100%'} width='70%' display="flex" justifyContent="center" flexDirection={'column'}>
        <RAppBar/>    
        <ChatDisp/>
        <Rfooter/>
    </Box>
  )
}
