import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// project-imports
import Logo from 'components/logo';
import useAuth from 'hooks/useAuth';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
// Removed FirebaseRegister since we are implementing our own form

// assets
import imgFacebook from 'assets/images/auth/facebook.svg';
import imgTwitter from 'assets/images/auth/twitter.svg';
import imgGoogle from 'assets/images/auth/google.svg';

// Function to handle registration
async function handleRegister(data) {
  try {
    const response = await axios.post('https://799jsa8t3k.execute-api.us-west-2.amazonaws.com/dev/register', data); // Replace with your API Gateway URL
    console.log(response.data);
    alert('User registered successfully!');  // Display success message
  } catch (error) {
    console.error('Error registering user:', error);
    alert('Error registering user. Please try again.');  // Display error message
  }
}

// ================================|| REGISTER ||================================ //

export default function Register() {
  const { isLoggedIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      companyName: e.target.companyName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    handleRegister(data);
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgFacebook} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Facebook
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgTwitter} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Twitter
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgGoogle} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Google
              </AuthSocButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthDivider>
            <Typography variant="body1">OR</Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/login' : '/login'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="First Name" name="firstName" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Last Name" name="lastName" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Company Name" name="companyName" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" name="email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" name="password" type="password" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
