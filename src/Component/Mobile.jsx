import React from "react";
import RightComponent from "./RightComponent";
import LeftComponent from "./LeftComponent";
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import RSDisplay from "../testComp/RSDisplay";

export default function Mobile() {
    return (
        <Grid container direction={'row'} height={'100%'}>
            <Routes>
                <Route path='/' element={<LeftComponent />} />
                <Route path='/:id' element={<RSDisplay />} />
            </Routes>
        </Grid>
    )
}