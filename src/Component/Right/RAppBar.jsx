import React from 'react'
import { Avatar, Box, Typography} from '@mui/material'
import RightIcon from './Ricons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {useSelector, useDispatch} from 'react-redux';
import { setsContact } from '../../app/Slices/SelectContactSlice/sContact';

export default function RAppBar() {

    const dispatch = useDispatch()
    const sContact = useSelector((state)=>state.sContact.sContact)
    const contactState = useSelector((state)=>state.contactState.contacts)
    const index = contactState.findIndex((contact)=>contact.id===sContact)

    return (
        <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} border={'1px solid #1f2c33'} p={'6.6px 0px'}>
            <Box display={'flex'} sx={{ alignItems: 'center' }}>

                <ArrowBackIcon sx={{ color:"white", display:{ xs :sContact ? 'block' : 'none', sm:"none"}}} onClick={ () =>dispatch(setsContact(null))}/>

                <Box ml={2}>
                    <Avatar />
                </Box>

                <Box display={"flex"} flexDirection={'column'} ml={2} >
                    <Typography variant='body1' color={'white'} justifyContent={'center'}>{contactState[index].name}</Typography>
                    {/* <Typography variant='caption' color={'green'}>Online</Typography> */}
                </Box>
            </Box>
            <Box height={"100%"} alignItems={'center'} ml={3} >
                <RightIcon />
            </Box>
        </Box>
    )
}
