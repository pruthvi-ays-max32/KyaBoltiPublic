import React from 'react'
import {Box, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
export default function SearchAppBar() {
  return (
    <Box>
        <Box display={'flex'}>
            <SearchIcon />
            <TextField fullWidth label="Search or Start A New Chat" sx={{varient: 'outlined'}} id="fullWidth" />    
        </Box>
        
        SearchAppBar</Box>
  )
}
