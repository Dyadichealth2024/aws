import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function VisionSection() {
  return (
    <Box sx={{ my: 4, py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" align="center">
        Transforming humans to enjoy their time together with enormously renewed and balanced energy levels.
      </Typography>
    </Box>
  );
}
