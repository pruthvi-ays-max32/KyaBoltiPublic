import { Avatar, Box, Divider, Stack, IconButton, List, ListItem, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
// import {setsContact} from '../../app/Slices/SelectContactSlice/sContact';
import { setsContact } from '../../app/Slices/SelectContactSlice/sContact.ts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Contact {
    name : string;
}

export default function ContactList({searchText}:any) { 
  const navigate=useNavigate()
  const contactState = useSelector((state : any) => state.contactState.contacts);
  const dispatch = useDispatch();

    const FilterArray = contactState.filter((contact :Contact)=>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
      <Box display={'flex'} flexDirection='column' bgcolor={"#111B21"}  height={'calc(100vh - 6vh - 9vh)'}>
        <List sx={{ maxHeight: '78vh', overflowY: 'scroll', scrollbarWidth: 'thin',  scrollbarColor: "rgba(var(--white-rgb),.16)"}}>
          {FilterArray.map((contact : any, index : number) => (
            <>
              {/* <Link to={`/${contact.id}`}> */}
              <ListItem key={index} onClick={() =>{dispatch(setsContact(contact.id))
                navigate(`/${contact.id}`)}}>
                <Box display={'flex'} flexDirection={'row'} sx={{width:"100%"}}>
                  <Avatar />
                  <Box display={'flex'} flexDirection={'column'} ml={2} sx={{width:"100%"}}>
                      <Stack direction={"row"} justifyContent='space-between' >      
                          <Typography variant='body1' color={'white'}> {contact.name} </Typography>
                          <Typography variant="caption" color={'whitesmoke'}>{contact.messages[contact.messages.length-1].time}</Typography>                       
                      </Stack>
                    <Box display={'flex'} flexDirection={'row'}>             
                      <Box>
                        <IconButton>
                            <DoneIcon sx={{color:"white", height:"18px"}}/>
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant='caption' color={'whitesmoke'}> {contact.messages[contact.messages.length-1].msg}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              {/* </Link> */}
              <Divider variant='inset' component={'li'}></Divider>
            </>
          ))}

        </List>
      </Box>
    )
  }
