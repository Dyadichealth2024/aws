import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

// project-imports
import Logo from 'components/logo';
import useAuth from 'hooks/useAuth';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister'; // Retain Firebase integration if needed

// assets
import imgFacebook from 'assets/images/auth/facebook.svg';
import imgTwitter from 'assets/images/auth/twitter.svg';
import imgGoogle from 'assets/images/auth/google.svg';

// Password strength utility
import { strengthColor, calculateStrength } from 'utils/password-strength';

// Function to handle registration
async function handleRegister(data) {
  try {
    const response = await axios.post('https://hmgdrp86cl.execute-api.us-west-2.amazonaws.com/dev/register', data); 
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, error };
  }
}

export default function Register() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [passwordStrength, setPasswordStrength] = useState({ label: '', color: '' });

  const handlePasswordChange = (e) => {
    const strength = calculateStrength(e.target.value);
    setPasswordStrength(strengthColor(strength));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      companyName: e.target.companyName.value || "", 
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const result = await handleRegister(data);
    if (result.success) {
      toast.success('User registered successfully!', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.error('Error registering user. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <AuthWrapper>
      <ToastContainer />
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Logo onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
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
                <img src={imgTwitter} alt="Twitter" style={{ margin: '0 10px' }} /> Sign In with Twitter
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgGoogle} alt="Google" style={{ margin: '0 10px' }} /> Sign In with Google
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
          <FirebaseRegister /> {/* Keeping Firebase integration */}
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
                <TextField label="Company Name" name="companyName" fullWidth /> 
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" name="email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  required
                  onChange={handlePasswordChange}
                />
                <LinearProgress
                  variant="determinate"
                  value={passwordStrength.color === 'error.main' ? 20 : passwordStrength.color === 'warning.main' ? 50 : 100}
                  sx={{ mt: 1, bgcolor: 'lightgray' }}
                />
                <Typography variant="body2" color={passwordStrength.color} sx={{ mt: 1 }}>
                  {passwordStrength.label}
                </Typography>
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
