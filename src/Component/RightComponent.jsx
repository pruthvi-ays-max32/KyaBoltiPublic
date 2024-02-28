import React from 'react'
import { Box } from '@mui/material'
import RSDisplay from '../testComp/RSDisplay'
import RIDisplay from '../testComp/RIDisplay'
import { Route, Routes } from 'react-router-dom'

export default function RightComponent() {

  return (
    <Box>     
      <Routes>
        <Route path='/' element={<RIDisplay />} />
        <Route path='/:id' element={<RSDisplay />} />
      </Routes>    
    </Box>
  )
}