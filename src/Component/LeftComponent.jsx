import React from 'react'
import {Divider, Stack} from '@mui/material'
import LAppBar from './Left/LAppBar'
import ContactList from './Left/ContactList'
import SearchAppBar from './Left/SearchAppBar'

import { useState } from 'react'

export default function LeftComponent(props) {


  const [searchText, setSearchText] = useState("")
  function search(e){
    // console.log("EEEEEEEEEEEEE",e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <Stack direction={'column'} backgroundColor={"#1f2c33"} sx={{height:"100vh"}}> 
        <LAppBar/>
        <Divider variant='fullWidth' sx={{bgcolor:"#1f2c33"}}></Divider>
        <SearchAppBar search={search}/>
        <ContactList sContact={props.sContact} selectContact={props.selectContact} searchText={searchText} clonearray={props.clonearray}/>
    </Stack>
  )
}
