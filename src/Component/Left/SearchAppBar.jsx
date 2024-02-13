import React from 'react'
import { Box, IconButton, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';
import { InputBase } from '@mui/material';

export default function SearchAppBar() {
  return (
    <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{ bgcolor: '#111B21'}}>
      <Box width={'100%'} display={'flex'} margin={1} sx={{ bgcolor: '#111B21', height: "8vh" }}>
        <Box display={'flex'} flexDirection={'row'} borderRadius={'2px'} width={'90%'} bgcolor={'#202C33'} sx={{ border: '0.5px ', borderRadius: '6px', height: '5vh' }}>
          <IconButton>
            <SearchIcon sx={{ color: "white", height: "20px" }} />
          </IconButton>
          <InputBase placeholder='search or start a new chat' sx={{ width: "100%", color: 'white' }}></InputBase>
        </Box>
        <Box>
          <IconButton>
            <FilterListIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>

    </Grid>
  )
}
