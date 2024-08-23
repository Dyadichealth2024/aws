// material-ui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// project imports

import IntroHeader from 'sections/extra-pages/introduction/introHeader';


// ==============================|| CONTACT US - MAIN ||============================== //

export default function Intro() {
  return (
    <Grid container spacing={12} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12} md={12}>
        <IntroHeader />
      </Grid>
    </Grid>
  );
}
