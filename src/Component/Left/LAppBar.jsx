import React from 'react'
import { Box, AppBar, Avatar, IconButton, Input, Icon, TextField } from '@mui/material'

import MoreVert from '@mui/icons-material/MoreVert'
import GroupsIcon from '@mui/icons-material/Groups';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

import LeftIcons from './Licons';


export default function LAppBar() {
  return (


    <Box width={"100%"} height={'9vh'} display={'flex'} alignItems={'center'} bgcolor={'#1f2c33'} padding={'2px 2px'} justifyContent={'space-between'}>
      <Box marginLeft={2}>
        <Avatar/>
      </Box> 
      <Box>
        <LeftIcons />
      </Box>

    </Box>

  )
}

