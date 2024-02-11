import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import {Box, AppBar} from '@mui/material'

export default function HomePage() {
    return (
        <Box display='flex' flexDirection={'row'} height={'100vh'}>

            <LeftComponent />
            <Box sx={{border:".05px solid #2f3b44"}}/>
            <RightComponent />
                      
        </Box>

    )
}
