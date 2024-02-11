import React from 'react'
import { Avatar, Box, IconButton, Typography, Chip} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MoreVert from '@mui/icons-material/MoreVert'
import MdPhone from '@mui/icons-material/Phone';
export default function RAppBar() {
    return (
        <Box width={'100%'} height={'100%'} alignItems={"center"}>
            <Box bgcolor={'#1f2c33'} display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
                <Box display={'flex'}>
                    <Avatar />
                    <Box display={"flex"} flexDirection={'column'}>
                        <Typography variant='body1' color={'white'}>Pranay Lokhande</Typography>
                        <Typography variant='caption' color={'green'}>Online</Typography>
                    </Box>
                </Box>
                <Box>
                    <Chip icon={<MdPhone />} label="Call me" />
                    <SearchIcon />
                    <MoreVert/>
                </Box>
            </Box>

        </Box>
    )
}
