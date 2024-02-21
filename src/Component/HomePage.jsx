import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import {Grid } from '@mui/material'
import { useState } from 'react'
import {useSelector} from 'react-redux';

export default function HomePage() {


    var time = new Date();
    time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // const [Contactlist, setContactlist] = useState([
    //     { id: 1, name: "Pratte", contactNo: "1182451480", messages: [{ msg: "Hello 😏", time: "12:00am" }] },
    //     { id: 2, name: "Hanumant", contactNo: "721907384", messages: [{ msg: "Hii ", time: "03:59am" }, { msg: "Aaj chi kay progress", time: "04.00am" }] },
    //     { id: 3, name: "Panda", contactNo: "8787876692", messages: [{ msg: "Hey Panda .", time: "07:30pm" }] },
    //     { id: 4, name: "Ayesha", contactNo: "1182451533", messages: [{ msg: "Kya chal raha he", time: "08:30am" }] },
    //     { id: 5, name: "Praneeth", contactNo: "7219000099", messages: [{ msg: "Mag Kas chalu ahe.", time: "09:30am" }] },
    //     { id: 6, name: "Vinay", contactNo: "8888886692", messages: [{ msg: "Patience is main ingredient to make a cup of Chai.", time: "12:30pm" }] },
    //     { id: 7, name: "Abhishek", contactNo: "728907384", messages: [{ msg: "we are just friends..", time: "03:30pm" }] },
    //     { id: 8, name: "Yashu", contactNo: "8787676692", messages: [{ msg: "Hello Yashu", time: "05:30pm" }] },
    //     { id: 9, name: "Vaishi", contactNo: "1182451433", messages: [{ msg: "Hii Vaishi", time: "08:30pm" }] },
    //     { id: 10, name: "Shejal", contactNo: "7219070099", messages: [{ msg: "Office Kas Chalu.", time: "10:30pm" }] },
    // ])

    
    // console.log(clonearray)

    const selectedContact = useSelector((state)=>state.selectedContact.sContact)
    const contactState = useSelector((state)=>state.contactState.contacts)
    console.log("1111111111",contactState)
    // console.log('2222222222', Contactlist)

    // let clonearray = [...contactState]
    // console.log("3333333333", clonearray)

    const [clonearray, setClonearray] = useState([...contactState])
    console.log("444444444", clonearray)

    function display(messageArr) {
        console.log("000000000",clonearray[selectedContact["id"]-1].messages)
        clonearray[selectedContact["id"] - 1].messages.push({ msg: messageArr, time: time })
        setClonearray(clonearray)
        // console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", clonearray[sContact["id"]-1])
    }

    return (
        <Grid container direction={'row'} height={'100%'}>

            <Grid item  sm={4} md={4} lg={3.5} xl={4} sx={{display:{xs:(selectedContact)? 'none':'block', sm:'block'}}}>
                <LeftComponent clonearray={clonearray} />
            </Grid>
            {/* <Grid item xs={0} sm={0} md={0.1} lg={0.3}>
                <Box sx={{ border: ".05px solid #2f3b44" }} />
            </Grid> */}
            <Grid item sm={8} md={8} lg={8.5} xl={8} xs={12} sx={{display:{xs:(selectedContact)? 'block':'none', sm:'block'}}}>
                <RightComponent display={display}/>
            </Grid>


        </Grid>
    )
}
