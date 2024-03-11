// import chatbg from '../Component/chatbackground.jpeg'
// import RAppBar from '../Component/Right/RAppBar'
// import ChatDisp from '../Component/Right/ChatDisp';
// import Rfooter from '../Component/Right/Rfooter';
// import { Box } from '@mui/material'
// export default function RSDisplay(){

//     const backgroundImageUrl1 = `url(${chatbg})`;
  
//     const containerStyle1 = {
//       backgroundImage: backgroundImageUrl1,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     };
  
//     return (
     
//       <Box sx={{height:"100vh"}} display="flex" justifyContent="center" flexDirection={'column'} alignItems={'center'} width={'100%'}>
  
//         <Box height={'9.6vh'} width={'100%'} bgcolor={'#1f2c33'}>
//           <RAppBar/>
//         </Box>
  
//         <Box height={'calc(100vh - 9.6vh - 9vh)'}  width={'100%'} style={containerStyle1} sx={{overflowY:'scroll', scrollbarWidth:'thin', maxHeight:"85vh", scrollbarColor:"rgba(var(--white-rgb),.16)"}}>
//           <ChatDisp />
//         </Box>
  
//         <Box height={'9vh'} width={'100%'} bgcolor={'#1f2c33'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
//           <Rfooter />
//         </Box>
  
//       </Box>
//     )
//   }