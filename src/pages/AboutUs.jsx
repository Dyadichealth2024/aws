import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AboutHeader from 'sections/extra-pages/about/AboutHeader';
import VisionSection from 'sections/extra-pages/about/VisionSection';
import CEOInfo from 'sections/extra-pages/about/CEOInfo';

// ==============================|| ABOUT US - MAIN ||============================== //

export default function AboutUs() {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      {/* Spacer to move the content down */}
      <Grid item xs={12} sx={{ mt: 8 }}>
        {/* New content above the boxes */}
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              We utilize Dyadic Health to improve the health of the Dyadic partners in relationship through sustainable interventions for positive outcomes.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Healthy lifestyle is all about forming habits- healthy habits. Hence “Healthy Lifestyle system” (HLS) will be a self-paced and coach led series of valuable routines and interventions to help individuals and Dyads to adopt a healthy living style.
            </Typography>
            <Typography variant="body1">
              HLS will address an individual and progressively optimize for a dyad as a unit to encourage common goals and therefore the bonding. In conjunction, our tools act as a support mechanism that provide directions for easy regimes and help a dyad as a unit of action takers for healthy lifestyle.
            </Typography>
          </Box>
        </Container>
      </Grid>

      {/* Place AboutHeader and VisionSection side by side */}
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <Grid container spacing={4} justifyContent="space-around">
            <Grid item xs={12} md={5}>
              <AboutHeader />
            </Grid>
            <Grid item xs={12} md={5}>
              <VisionSection />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* CEOInfo component */}
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <CEOInfo />
        </Container>
      </Grid>
    </Grid>
  );
}
