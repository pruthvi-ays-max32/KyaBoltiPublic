import { Box } from '@mui/material'
import RIDisplay from '../testComp/RIDisplay';
import RSDisplay from '../testComp/RSDisplay';
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