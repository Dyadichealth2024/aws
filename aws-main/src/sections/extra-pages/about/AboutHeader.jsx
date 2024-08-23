import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AboutHeader() {
  return (
    <Box
      sx={{
        my: 4,
        py: 4,
        px: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        height: '100%', // Ensures full height in the grid container
        minHeight: '300px', // You can adjust this as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1, // Optional, for better visual separation
      }}
    >
      <Stack spacing={2} sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h4">
          Our Vision
        </Typography>
        <Typography color="text.secondary">
          Transforming humans to enjoy their time together with enormously renewed and balanced energy levels.
        </Typography>
      </Stack>
    </Box>
  );
}
