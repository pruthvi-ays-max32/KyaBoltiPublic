import React from 'react'
import {Box} from '@mui/material'
import LAppBar from './Left/LAppBar'
import ContactList from './Left/ContactList'
import SearchAppBar from './Left/SearchAppBar'
export default function LeftComponent(props) {
  let Contactlist = props.Contactlist
  return (
    <Box height={"100vh"} width={'30%'} backgroundColor={"#1f2c33"}> 
        <LAppBar/>
        <SearchAppBar/>
        <ContactList Contactlist={Contactlist}/>
    </Box>
  )
}
