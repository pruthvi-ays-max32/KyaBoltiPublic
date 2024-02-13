import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import {Box, Grid} from '@mui/material'
import { useState } from 'react'

export default function HomePage() {


    const Contactlist = [
        {id:1, name: "Pratte", contactNo : "1182451480", msg:"Agav😏"},
        {id:2, name:"Hanumant Dhaygude", contactNo:"721907384", msg :"Pruthvya lav na re setting *** "},
        {id:3, name:"Panda", contactNo:"8787876692", msg : "Hey Panda Muskadin."},
        {id:4, name: "Ayesha Shaikh", contactNo : "1182451433", msg:"Maar khatos bagh"},
        {id:5, name:"Praneeth Shetty", contactNo:"7219000099", msg :"Mag Kas chalu ahe."},
        {id:6, name:"Vinay Ghate", contactNo:"8888886692", msg : "Tu bhet room madhe tula dakhvto."},
        {id:7, name:"Abhishek Dhande", contactNo:"721907384", msg :"we are just friends.."},
        {id:8, name:"Yashu Shah", contactNo:"8787876692", msg : "Te Hod lai yedi bai ahe baba."},
        {id:9, name: "Vaishi Kad", contactNo : "1182451433", msg:"swata lai dhagala tekl aslya sarkh boltos"},
        {id:10, name:"Shejal Bhosale", contactNo:"7219000099", msg :"As ast ka bhai."},
    ]


    const [sContact, setsContact] = useState({})

    function disp(e){
        setsContact({})
    }

    return (
        <Grid display='flex' flexDirection={'row'} height={'100vh'}>

            <LeftComponent Contactlist={Contactlist} sContact={sContact} setsContact={setsContact}/>
            <Box sx={{border:".05px solid #2f3b44"}}/>
            <RightComponent />
                      
        </Grid>
    )
}
