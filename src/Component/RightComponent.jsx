import React from 'react'
import { Box } from '@mui/material'
import RAppBar from './Right/RAppBar'
import Rfooter from './Right/Rfooter'
import ChatDisp from './Right/ChatDisp'
import background from './background.png'
import chatbg from './chatbackground.jpeg'
import { useState } from 'react'
export default function RightComponent(props) {

  const backgroundImageUrl = `url(${background})`;
  const containerStyle = {
    backgroundImage: backgroundImageUrl,
  };


  const backgroundImageUrl1 = `url(${chatbg})`;

  const containerStyle1 = {
    backgroundImage: backgroundImageUrl1,
  };

  const [rply, setrply] = useState(null)
  console.log("$$$$$$$$$$$$$$$$$$$", rply)

  function display(){
    console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", rply)
  }

  if (props.sContact !== null) {
    return (
      <Box sx={{width:"70%", height:"100vh"}} display="flex" justifyContent="center" flexDirection={'column'} alignItems={'center'}>

        <Box height={'9.6vh'} width={'100%'} bgcolor={'#1f2c33'}>
          <RAppBar sContact={props.sContact} />
        </Box>

        <Box height={'calc(100vh - 9.6vh - 9vh)'}  width={'100%'} style={containerStyle1} sx={{overflowY:'scroll', scrollbarWidth:'thin', maxHeight:"85vh"}}>
          <ChatDisp sContact={props.sContact} rply={rply} display={display}/>
        </Box>

        <Box height={'9vh'} width={'100%'} bgcolor={'#1f2c33'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Rfooter rply={rply} setrply={setrply} display={display}/>
        </Box>

      </Box>
    )
  }

  else {
    return (
      <Box style={containerStyle} backgroundColor={"222E35"} sx={{width:"70%", height:"100vh"}} display="flex" >

      </Box>
    )
  }
}
