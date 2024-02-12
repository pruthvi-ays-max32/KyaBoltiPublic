import React from 'react'
import { Box, AppBar, Avatar, IconButton, Input, Icon, TextField } from '@mui/material'

import MoreVert from '@mui/icons-material/MoreVert'
import GroupsIcon from '@mui/icons-material/Groups';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';


export default function LAppBar() {
  return (
    <Box>

      <Box width={"100%"} height={'9vh'} display={'flex'} alignItems={'center'} bgcolor={'#1f2c33'} padding={'2px 2px'} justifyContent={'space-between'} ml={2} >
        <Avatar />

        <Box display={'flex'} mr={3}>

          <IconButton>
            <GroupsIcon sx={{color:'white'}} />
          </IconButton>
          <IconButton>
            <DonutLargeIcon sx={{color:'white'}} />
          </IconButton>
          <IconButton>
            <AddCommentIcon sx={{color:'white'}} />
          </IconButton>
          <IconButton>
            <MoreVert sx={{color:'white'}} />
          </IconButton>
        </Box>

      </Box>

    </Box>
  )
}

