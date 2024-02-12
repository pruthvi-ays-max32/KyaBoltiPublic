import React from 'react'
import { Avatar, Box, IconButton, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MoreVert from '@mui/icons-material/MoreVert'
import VideocamIcon from '@mui/icons-material/Videocam';
export default function RAppBar() {
    return (
        <Box width={'100%'} height={'100%'} alignItems={"center"}>
            <Box bgcolor={'#1f2c33'} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} height={'9vh'} border={'1px solid #1f2c33'} p={'10px 10px'}>
                <Box display={'flex'}>
                    <Avatar />
                    <Box display={"flex"} flexDirection={'column'} ml={2} sx={{}}>
                        <Typography variant='body1' color={'white'}>Pranay Lokhande</Typography>
                        <Typography variant='caption' color={'green'}>Online</Typography>
                    </Box>
                </Box>
                <Box height={"100%"} textAlign={'center'} ml={3}>

                    <IconButton>
                        <VideocamIcon sx={{ color: "white" }} />
                    </IconButton>

                    <IconButton>
                        <SearchIcon sx={{ color: "white" }} />
                    </IconButton>

                    <IconButton>
                        <MoreVert sx={{ color: "white" }} />
                    </IconButton>

                </Box>
            </Box>

        </Box>
    )
}
