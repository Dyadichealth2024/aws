// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; // Import TextField component
import { useState } from 'react';

// project-imports
import FadeInWhenVisible from './Animation';
// assets
import { ExportSquare } from 'iconsax-react';

// ==============================|| LANDING - FreePage ||============================== //

export default function FreePage() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(!validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!error && email) {
      // Handle valid email submission
      console.log('Email is valid:', email);
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 10, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12} md={8}>
          <FadeInWhenVisible>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h2">
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.primary.main
                    }}
                  >
                    Track{' '}
                  </Box>
                  Your Activity
                </Typography>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid>
        <Grid item xs={12} md={4}>
          <FadeInWhenVisible>
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 2 }} // Flexbox to align items horizontally with spacing
            >
              {/* Email input field */}
              <TextField
                label="Email"
                type="email" // Set input type to email
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={handleEmailChange}
                error={error}
                helperText={error ? 'Please enter a valid email address' : ''}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ExportSquare />}
                component={Link}
                onClick={handleSubmit}
                disabled={!email || error} // Disable button if email is invalid or empty
              >
                submit
              </Button>
            </Box>
          </FadeInWhenVisible>
        </Grid>
      </Grid>
    </Container>
  );
}
