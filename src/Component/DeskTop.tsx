import RightComponent from "./RightComponent";
import LeftComponent from "./LeftComponent";
import {Grid } from '@mui/material'

export default function DeskTop() {
    return (
        <Grid container direction={'row'} height={'100%'}>
            <Grid item  sm={4} md={4} lg={3.5} xl={4}>
                <LeftComponent />
            </Grid>
         
            <Grid item sm={8} md={8} lg={8.5} xl={8}>
                <RightComponent />
            </Grid>
        </Grid>
    )
}