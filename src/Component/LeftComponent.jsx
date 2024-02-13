import React from 'react'
import {Grid, Divider} from '@mui/material'
import LAppBar from './Left/LAppBar'
import ContactList from './Left/ContactList'
import SearchAppBar from './Left/SearchAppBar'

export default function LeftComponent(props) {
  return (
    <Grid backgroundColor={"#1f2c33"} sx={{width:"30%", height:"100%"}}> 
        <LAppBar/>
        <Divider variant='fullWidth' sx={{bgcolor:"#1f2c33"}}></Divider>
        <SearchAppBar/>
        <ContactList Contactlist={props.Contactlist} sContact={props.sContact} setsContact={props.setsContact}/>
    </Grid>
  )
}
