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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1,
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
