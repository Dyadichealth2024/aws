import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import SridharImage from '../../../assets/images/aboutus/Sridhar-image-369x369.jpg';
;

export default function CEOInfo() {
  return (
    <Box sx={{ my: 4, py: 4, textAlign: 'center' }}>
      <Avatar
        alt="CEO"
        src={SridharImage} // Using the imported image
        sx={{ width: 120, height: 120, margin: 'auto' }}
      />
      <Typography variant="h5" align="center" gutterBottom>
        Sridhar Nagulavancha, CEO
      </Typography>
      <Typography variant="body1" align="center">
        Sridhar Nagulavancha is the founder and CEO of Dyadic Health. He has been involved in building software for over 25 years. Prior to 2008, he worked in variety of software roles as a programmer, Dev ops and Software architect in Digital Commerce, AT&T, Freddie Mac and Software AG. He was involved in software services firm from 2009 to 2017. From 2018, he is involved in guiding startups and was active with triathlons and Iron man races.
      </Typography>
    </Box>
  );
}
