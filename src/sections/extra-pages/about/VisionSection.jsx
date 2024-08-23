import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function VisionSection() {
  return (
    <Box
      sx={{
        my: 4,
        py: 4,
        px: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Mission
      </Typography>
      <Typography variant="body1" align="center">
        Create 10 million healthy dyadic relationships by 2027 through easy to adopt habits and interventions.
      </Typography>
    </Box>
  );
}
