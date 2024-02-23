import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import {Grid } from '@mui/material'
import {useSelector} from 'react-redux';

export default function HomePage() {
    const selectedContact = useSelector((state)=>state.selectedContact.sContact)

    return (
        <Grid container direction={'row'} height={'100%'}>
            <Grid item  sm={4} md={4} lg={3.5} xl={4} sx={{display:{xs:(selectedContact)? 'none':'block', sm:'block'}}}>
                <LeftComponent />
            </Grid>
         
            <Grid item sm={8} md={8} lg={8.5} xl={8} xs={12} sx={{display:{xs:(selectedContact)? 'block':'none', sm:'block'}}}>
                <RightComponent />
            </Grid>
        </Grid>
    )
}
