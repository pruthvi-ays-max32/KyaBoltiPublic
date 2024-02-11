import React from 'react'
import {Box} from '@mui/material'
import LAppBar from './Left/LAppBar'
import ContactList from './Left/ContactList'
import SearchAppBar from './Left/SearchAppBar'
export default function LeftComponent() {
  return (
    <Box height={"100vh"} width={'30%'} backgroundColor={"white"}>
        
        <LAppBar/>
        <SearchAppBar/>
        LeftComponent
        <ContactList/>

    </Box>
  )
}
