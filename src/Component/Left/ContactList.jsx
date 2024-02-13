import React from 'react'
import {Avatar, Box, Divider, List, ListItem, Typography} from '@mui/material'
export default function ContactList(props) {
  let Contactlist = props.Contactlist
  console.log("+++++++++++++++++++",Contactlist)
  function disp(contact){
    console.log(")))))))))))))))))))))))))))", contact)
    props.setsContact(contact)   
}

  return (
    <Box display={'flex'}  flexDirection='column' bgcolor={"#111B21"}>
      <List sx={{maxHeight: '76vh', overflowY: 'scroll', scrollbarWidth:'thin'}}>
          {Contactlist.map((contact, index)=>(
            <>
            <ListItem key={index} >
              <Box display={'flex'} flexDirection={'row'}>
                <Avatar/>
                <Box display={'flex'} flexDirection={'column'} ml={2} onClick={()=>{
                  console.log("??????????????",contact)
                  disp(contact)
                }}>
                  <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Typography variant='body1' color={'white'}> {contact.name} </Typography>
                    <Typography variant="caption" color={'whitesmoke'}>{contact.messages[0].time}</Typography>
                  </Box>
                  
                    <Box>
                    <Typography variant='caption' color={'whitesmoke'}> {contact.messages[0].msg}</Typography>
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
