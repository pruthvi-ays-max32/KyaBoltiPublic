import background from '../Component/background.png'
import { Grid } from '@mui/material'
export default function RIDisplay () {

    const backgroundImageUrl = `url(${background})`;
    const containerStyle = {
      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  
    return (
      <Grid style={containerStyle} sx={{height:"100vh"}} display={'flex'} bgcolor={'222E35'}>

      </Grid>
     
    )
  }