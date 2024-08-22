import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// project imports
import Traningheader from 'sections/extra-pages/Traning/Traningheader';
import Traningrelation from 'sections/extra-pages/Traning/Traningrelation';

// ==============================|| training page ||============================== //

export default function Traning() {
  return (
    <Container sx={{ mb: 12 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Traningheader />
        </Grid>

        <Grid item xs={12} >
          {<Traningrelation /> }
        </Grid>
      </Grid>
    </Container>
  );
}
