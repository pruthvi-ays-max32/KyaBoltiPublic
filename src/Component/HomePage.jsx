import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import { Box, Grid } from '@mui/material'
import { useState } from 'react'

export default function HomePage() {


    var time = new Date();
    time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const [Contactlist, setContactlist] = useState([
        { name: "Pratte", contactNo: "1182451480", messages: [{ msg: "Hello 😏", time: "12:00am" }] },
        { name: "Hanumant", contactNo: "721907384", messages: [{ msg: "Hii ", time: time }, { msg: "Aaj chi kay progress", time: "04.00pm" }] },
        { name: "Panda", contactNo: "8787876692", messages: [{ msg: "Hey Panda .", time: time }] },
        { name: "Ayesha", contactNo: "1182451433", messages: [{ msg: "Kya chal raha he", time: time }] },
        { name: "Praneeth", contactNo: "7219000099", messages: [{ msg: "Mag Kas chalu ahe.", time: time }] },
        { name: "Vinay", contactNo: "8888886692", messages: [{ msg: "Patience is main ingredient to make a cup of Chai.", time: time }] },
        { name: "Abhishek", contactNo: "721907384", messages: [{ msg: "we are just friends..", time: time }] },
        { name: "Yashu", contactNo: "8787876692", messages: [{ msg: "Hello Yashu", time: time }] },
        { name: "Vaishi", contactNo: "1182451433", messages: [{ msg: "Hii Vaishi", time: time }] },
        { name: "Shejal", contactNo: "7219000099", messages: [{ msg: "Office Kas Chalu.", time: time }] },
    ])

    let clonearray = [... Contactlist]
    // console.log(clonearray)

    const [sContact, setsContact] = useState(null)
    // console.log("%%%%%%%%%%%%%%",sContact)
    function selectContact(contact) {
        setsContact(contact)
    }


    const [messageArr, setmessageArr] = useState(null)
    console.log("$$$$$$$$$$$$$$$$$$$", messageArr)

    function updateRply(e) {
        setmessageArr(e.target.value)
    }

    function display() {
        console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", messageArr)
    }




    return (
        <Box display='flex' flexDirection={'row'} height={'100vh'} width={'100%'}>

            <LeftComponent Contactlist={Contactlist} sContact={sContact} selectContact={selectContact} clonearray={clonearray}/>
            <Box sx={{ border: ".05px solid #2f3b44" }} />
            <RightComponent sContact={sContact} messageArr={messageArr} updateRply={updateRply} display={display}/>

        </Box>
    )
}
