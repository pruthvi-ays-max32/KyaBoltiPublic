import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import {Box, Grid} from '@mui/material'
import { useState } from 'react'

export default function HomePage() {


    var time = new Date();
    time= time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12:true})
    const [Contactlist, setContactlist] = useState([
        {id:1, name: "Pratte", contactNo : "1182451480", messages:[{msg:"Agav😏", time:time}]},
        {id:2, name:"Hanumant Dhaygude", contactNo:"721907384", messages :[{msg:"Pruthvya lav na re setting *** ", time:time}]},
        {id:3, name:"Panda", contactNo:"8787876692",messages :[{msg : "Hey Panda Muskadin.", time:time}]},
        {id:4, name: "Ayesha Shaikh", contactNo : "1182451433", messages:[{msg:"Maar khatos bagh", time:time}]},
        {id:5, name:"Praneeth Shetty", contactNo:"7219000099", messages:[{msg:"Mag Kas chalu ahe.", time:time}]},
        {id:6, name:"Vinay Ghate", contactNo:"8888886692", messages:[{msg:"Patience is main ingredient to make a cup of Chai.", time:time}]},
        {id:7, name:"Abhishek Dhande", contactNo:"721907384", messages:[{msg:"we are just friends..", time:time}]},
        {id:8, name:"Yashu Shah", contactNo:"8787876692", messages:[{msg:"Te Hod lai yedi bai ahe baba.", time:time}]},
        {id:9, name: "Vaishi Kad", contactNo : "1182451433", messages:[{msg:"swata lai dhagala tekl aslya sarkh boltos", time:time}]},
        {id:10, name:"Shejal Bhosale", contactNo:"7219000099", messages:[{msg:"As ast ka bhai.", time:time}]},
    ])


    const [sContact, setsContact] = useState(null)
    // console.log("%%%%%%%%%%%%%%",sContact)

    

    return (
        <Box display='flex' flexDirection={'row'} height={'100vh'} width={'100%'}>

            <LeftComponent Contactlist={Contactlist} sContact={sContact} setsContact={setsContact}/>
            <Box sx={{border:".05px solid #2f3b44"}}/>
            <RightComponent sContact={sContact}/>
                      
        </Box>
    )
}
