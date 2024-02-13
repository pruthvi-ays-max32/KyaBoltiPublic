import React from 'react'
import { Avatar, Box, IconButton, Typography, Grid} from '@mui/material'
import RightIcon from './Ricons'


export default function RAppBar(props) {
    return (
            <Box  display={'flex'} justifyContent={'space-between'} flexDirection={'row'} border={'1px solid #1f2c33'} p={'6.6px 3px'}>
                <Box display={'flex'} sx={{alignItems:'center'}}>
                    <Box ml={2}>
                    <Avatar />
                    </Box>
                    
                    <Box display={"flex"} flexDirection={'column'} ml={2} >
                        <Typography variant='body1' color={'white'}  justifyContent={'center'}>{props.sContact.name}</Typography>
                        {/* <Typography variant='caption' color={'green'}>Online</Typography> */}
                    </Box>
                </Box>
                <Box height={"100%"} alignItems={'center'} ml={3} >
                    <RightIcon/>
                </Box>
            </Box>
    )
}
