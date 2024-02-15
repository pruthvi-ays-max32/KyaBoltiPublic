import React from 'react'
import { Box, Grid, Avatar } from '@mui/material'
import LeftIcons from './Licons';


export default function LAppBar() {
  return (


    <Grid container  width={"100%"} height={'9vh'} display={'flex'} alignItems={'center'} bgcolor={'#1f2c33'} padding={'2px 2px'} justifyContent={'space-between'}>
      <Grid item ml={1} >
        <Avatar/>
      </Grid> 
      <Grid item>
        <LeftIcons />
      </Grid>

    </Grid>

  )
}

