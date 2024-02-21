import React from 'react'
import { Box, Grid } from '@mui/material'
import RAppBar from './Right/RAppBar'
import Rfooter from './Right/Rfooter'
import ChatDisp from './Right/ChatDisp'
import background from './background.png'
import chatbg from './chatbackground.jpeg'
import { useSelector } from 'react-redux'

export default function RightComponent(props) {

  const backgroundImageUrl = `url(${background})`;
  const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  };

  const backgroundImageUrl1 = `url(${chatbg})`;

  const containerStyle1 = {
    backgroundImage: backgroundImageUrl1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  };

  const selectedContact = useSelector((state)=>state.selectedContact.sContact)
  // console.log("BBBBBB", selectedContact)

  if (selectedContact !== null) {
    return (
   
      <Box sx={{height:"100vh"}} display="flex" justifyContent="center" flexDirection={'column'} alignItems={'center'}>

        <Box height={'9.6vh'} width={'100%'} bgcolor={'#1f2c33'}>
          <RAppBar onBackButton={props.onBackButton}/>
        </Box>

        <Box height={'calc(100vh - 9.6vh - 9vh)'}  width={'100%'} style={containerStyle1} sx={{overflowY:'scroll', scrollbarWidth:'thin', maxHeight:"85vh", scrollbarColor:"rgba(var(--white-rgb),.16)"}}>
          <ChatDisp messageArr={props.messageArr} display={props.display}/>
        </Box>

        <Box height={'9vh'} width={'100%'} bgcolor={'#1f2c33'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Rfooter display={props.display} />
        </Box>

      </Box>

    )
  }

  else {
    return (
      <Grid style={containerStyle} backgroundColor={"222E35"} sx={{height:"100vh"}} display="flex" >

      </Grid>
    )
  }
}
