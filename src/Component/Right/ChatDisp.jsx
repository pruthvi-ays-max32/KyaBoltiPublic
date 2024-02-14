import React from 'react'
import {Grid, Box, Typography} from '@mui/material'
export default function ChatDisp(props) {
 
    return (
      <Box m={2} display={'flex'} justifyContent={'flex-end'}> 
           
           <Box color={'white'} >
                {props.sContact.messages[0].msg}
            </Box>
            <Box>
              <Typography variant="caption" color={'whitesmoke'}>{props.sContact.messages[0].time}</Typography>
            </Box>
        
       </Box>
    )
  
  
}
