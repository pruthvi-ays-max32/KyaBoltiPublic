import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import { Box, Grid } from '@mui/material'
import { useState } from 'react'

export default function HomePage() {


    var time = new Date();
    time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const [Contactlist, setContactlist] = useState([
        { id:1, name: "Pratte", contactNo: "1182451480", messages: [{ msg: "Hello 😏", time: "12:00am" }] },
        { id:2, name: "Hanumant", contactNo: "721907384", messages: [{ msg: "Hii ", time: "03:59am" }, { msg: "Aaj chi kay progress", time: "04.00am" }] },
        {id:3, name: "Panda", contactNo: "8787876692", messages: [{ msg: "Hey Panda .", time: "07:30pm" }] },
        { id:4, name: "Ayesha", contactNo: "1182451533", messages: [{ msg: "Kya chal raha he", time: "08:30am" }] },
        { id:5, name: "Praneeth", contactNo: "7219000099", messages: [{ msg: "Mag Kas chalu ahe.", time: "09:30am" }] },
        { id:6, name: "Vinay", contactNo: "8888886692", messages: [{ msg: "Patience is main ingredient to make a cup of Chai.", time: "12:30pm" }] },
        { id:7, name: "Abhishek", contactNo: "728907384", messages: [{ msg: "we are just friends..", time: "03:30pm" }] },
        { id:8, name: "Yashu", contactNo: "8787676692", messages: [{ msg: "Hello Yashu", time: "05:30pm" }] },
        {id:9,  name: "Vaishi", contactNo: "1182451433", messages: [{ msg: "Hii Vaishi", time: "08:30pm" }] },
        { id:10, name: "Shejal", contactNo: "7219070099", messages: [{ msg: "Office Kas Chalu.", time: "10:30pm" }] },
    ])

    let clonearray = [...Contactlist]
    // console.log(clonearray)

    const [sContact, setsContact] = useState(null)
    // console.log("%%%%%%%%%%%%%%",sContact)
    function selectContact(contact) {
        setsContact(contact)
    }


    

    function display(messageArr) {
        // console.log("000000000",sContact["id"]-1)
        clonearray[sContact["id"]-1].messages.push({msg:messageArr, time:time})
        setContactlist(clonearray)
        // console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", clonearray[sContact["id"]-1])
    }

    return (
        <Box display='flex' flexDirection={'row'} height={'100vh'} width={'100%'}>

            <LeftComponent Contactlist={Contactlist} sContact={sContact} selectContact={selectContact} clonearray={clonearray}/>
            <Box sx={{ border: ".05px solid #2f3b44" }} />
            <RightComponent sContact={sContact} display={display}/>

        </Box>
    )
}
