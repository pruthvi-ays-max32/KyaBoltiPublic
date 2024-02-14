import React from 'react'
import { Avatar, Box, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography,  } from '@mui/material'

import DoneIcon from '@mui/icons-material/Done';
export default function ContactList(props) { 

    const FilterArray = props.clonearray.filter((contact)=>
      contact.name.toLowerCase().includes(props.searchText.toLowerCase())
    )

    return (
      <Box display={'flex'} flexDirection='column' bgcolor={"#111B21"}>
        <List sx={{ maxHeight: '77vh', overflowY: 'scroll', scrollbarWidth: 'thin', width:"100%"}}>
          {FilterArray.map((contact, index) => (
            <>
              <ListItem sx={{width:'100%'}} key={index} onClick={() => {
                // console.log("??????????????",contact)
                props.selectContact(contact)
              }}>
                <Box display={'flex'} flexDirection={'row'} width={'100%'}>
                  <Avatar />
                  <Box display={'flex'} flexDirection={'column'} ml={2} >
                      <Grid container justifyContent='space-between' >
                          <Grid item md={10}>
                          <Typography variant='body1' color={'white'}> {contact.name} </Typography>
                          </Grid>     
                          <Grid item md={2}>
                          <Typography variant="caption" color={'whitesmoke'}>{contact.messages[0].time}</Typography>
                          </Grid>
                      </Grid>
                    <Box display={'flex'} flexDirection={'row'}>             
                      <Box>
                        <IconButton>
                            <DoneIcon sx={{color:"white", height:"18px"}}/>
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant='caption' color={'whitesmoke'}> {contact.messages[0].msg}</Typography>
                      </Box>
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












  /********************** */


  //const Person = (props) => {

    //   let lasttext= (props.person.messages.length-1)
    //   console.log(props.person);
    //   return (
    //     <ListItem onClick={() => {
    //       // console.log("??????????????",contact)
    //       props.selectContact(props.person)
    //     }}>
    //       <ListItemAvatar>
    //         <Avatar />
    //       </ListItemAvatar>
    //       <ListItemText>
    //         <Typography variant='body1' color={'whitesmoke'}>{props.person.name}</Typography>
    //         <Typography variant='caption' color={'whitesmoke'}>{props.person.messages[lasttext].msg}</Typography>
    //       </ListItemText>
    //     </ListItem>
    //   )
    
    // }


//   export default function ContactList(props) { 
//     let searchText = props.searchText;
//     let clonearray = [...props.Contactlist];

//     function displayList(){
//       if (searchText !== undefined) {
//         clonearray = clonearray.filter(user => user.name.includes(searchText)); 
//         console.log("SSSSSSSSSSSSSSSSSSS" , clonearray)
//       }
//       console.log("MMMMMMMMMMM", clonearray)
//       let searchedArray = []
//       for (let i = 0; i < clonearray.length; i++) {
//         console.log("XXXXXXXXXXXXXXXX ", props.selectContact)
//         searchedArray.push(<Person person={clonearray[i]} selectContact={props.selectContact} key={clonearray[i].contactNo} />)
//         console.log("88888888888888888", searchedArray)
//       }
//       console.log("9999999999999999999",searchedArray)
//       return searchedArray;
//     } 

//   return (
//     <Box display={'flex'} flexDirection='column' bgcolor={"#111B21"}>
//       <List sx={{ maxHeight: '78vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
//         {displayList()}
//       </List>
//     </Box>
//   )
// }