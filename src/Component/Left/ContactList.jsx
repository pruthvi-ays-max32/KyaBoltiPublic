import React from 'react'
import {Avatar, Box, Divider, List, ListItem, Typography} from '@mui/material'
export default function ContactList(props) {
  let Contactlist = props.Contactlist

  return (
    <Box display={'flex'}  flexDirection='column'>
      <List sx={{maxHeight: '80vh', overflowY: 'scroll', scrollbarWidth:'thin'}}>
          {Contactlist.map((contact, index)=>(
            <>
            <ListItem key={index} >
              <Box display={'flex'} flexDirection={'row'}>
                <Avatar/>
                <Box display={'flex'} flexDirection={'column'} ml={2} onClick={()=>{
                  let newObj = contact;
                  console.log(newObj)
                  return newObj;
                }}>
                  <Box>
                  <Typography variant='body1' color={'white'}> {contact.name} </Typography>
                  </Box>
                  <Box>
                  <Typography variant="caption" color={'whitesmoke'}>{contact.msg}</Typography>
                  </Box>
                </Box>              
              </Box>      
            </ListItem>
            <Divider variant='inset' component={'li'}></Divider>
            </>
            
              
          ))}
         
      </List>       
    </Box>
  )
}
