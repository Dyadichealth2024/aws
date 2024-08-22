import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AboutHeader() {
  return (
    <Box sx={{ my: 4, py: 4, px: 4, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Stack spacing={2}>
          <Typography align="center" variant="h4">
            Our Vision
          </Typography>
          <Typography align="center" color="text.secondary">
            Transforming humans to enjoy their time together with enormously renewed and balanced energy levels.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
