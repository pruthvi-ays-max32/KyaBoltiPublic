import React from 'react'
import {Box, AppBar, Avatar, IconButton, Input, Icon, TextField} from '@mui/material'

import MoreVert from '@mui/icons-material/MoreVert'

export default function LAppBar() {
  return (
    <Box>

        <Box width={"100%"} height={'100%'} display={'flex'} alignItems={'center'} bgcolor={'#1f2c33'} padding={'0px 20px'}>
            <Avatar/>

            <Box display={'flex'}>
                <IconButton>        
                   <MoreVert/>
                </IconButton>
            </Box>
            
        </Box>
        
    </Box>
  )
}

