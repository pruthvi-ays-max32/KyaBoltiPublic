import React from 'react'
import {Box, Grid} from '@mui/material'
import LAppBar from './Left/LAppBar'
import ContactList from './Left/ContactList'
import SearchAppBar from './Left/SearchAppBar'

export default function LeftComponent(props) {

  return (
    <Grid height={"100vh"} width={'30%'} backgroundColor={"#1f2c33"} xs={12} sm={10} md={8}> 
        <LAppBar/>
        <SearchAppBar/>
        <ContactList Contactlist={props.Contactlist} sContact={props.sContact} setsContact={props.setsContact}/>
    </Grid>
  )
}
