import React from 'react'
import { Box, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';
import { InputBase } from '@mui/material';

export default function SearchAppBar() {
  return (
    <Box  display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{bgcolor:'111B21'}}>
      <Box display={'flex'} flexDirection={'row'} borderRadius={'2px'} width={'90%'} bgcolor={'#202C33'} sx={{border:'2px solid grey', borderRadius:'6px' , height:'6vh', ml:2}}>
        <IconButton>
          <SearchIcon sx={{color:"white"}} />
        </IconButton>
        <InputBase placeholder='search or start a new chat' sx={{width:"100%", color:'white'}}></InputBase>
        </Box>
        
        <Box sx={{width:'10%'}}>
        <IconButton>
          <FilterListIcon sx={{color:'white'}} />
        </IconButton>
        </Box>
    </Box>
  )
}
