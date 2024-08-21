import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';

// third party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';

// assets
import { DocumentDownload, ExportSquare } from 'iconsax-react';
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techMui from 'assets/images/landing/tech-mui.svg';
import techAngular from 'assets/images/landing/tech-angular.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techFigma from 'assets/images/landing/tech-figma.svg';
import techVue from 'assets/images/landing/tech-vuetify.svg';
import techNextJS from 'assets/images/landing/tech-nextjs.svg';

let value = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const Technologies = [
  {
    trending: false,
    icon: techBootstrap,
    title: 'Breathing',
    description: "Emotional Regulation through improvement of breathing patterns & respiratory health",
    preview: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com?isp=1' : 'https://ableproadmin.com',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techMui,
    title: 'Posture',
    description:'Quality interactions within Dyads through improvement of energy and emotional aspects',
    preview: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/react/?isp=1' : 'https://ableproadmin.com/react/',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techAngular,
    title: 'Workouts',
    description: "Strengthen dyadic relationships by promoting shared activities and mutual support.",
    preview:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/angular/default/?isp=1'
        : 'https://ableproadmin.com/angular/default/',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techVue,
    title: 'Diet',
    description: "Nutrient-rich foods reduce stress and increase emotional stability, leading to fewer conflicts.",
    preview: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/vue/?isp=1' : 'https://ableproadmin.com/vue/',
    free: null
  },
  {
    trending: false,
    icon: techNextJS,
    title: 'Recovery',
    description:'Enhance dyadic relationships by promoting shared relaxation and recovery activities.',
    preview:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://able-pro-material-next-ts-navy.vercel.app/?isp=1'
        : 'https://able-pro-material-next-ts-navy.vercel.app/',
    free: null
  },
  {
    trending: false,
    icon: techNet,
    title: 'Whole Health',
    description:'Blending the physical health of a self into the realm of dyadic relationships',
    preview:
      ispValue !== null && parseInt(ispValue) === 1 ? 'https://able-pro.azurewebsites.net/?isp=1' : 'https://able-pro.azurewebsites.net/',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  }
];

// ==============================|| LANDING - TechnologiesPage ||============================== //

export default function TechnologiesPage() {
  const [alertMessage, setAlertMessage] = useState('');
  const alertRef = useRef(null);

  const handleLockClick = () => {
    setAlertMessage('Complete Breathing First');
  };

  useEffect(() => {
    if (alertMessage && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [alertMessage]);

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '70vh', padding: 3 }}>
      <Container>
        {alertMessage && (
          <Alert
            severity="warning"
            ref={alertRef}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertMessage('');
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              mb: 1,
              backgroundColor: '#fff3e0',
              color: '#d84315',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            {alertMessage}
          </Alert>
        )}
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 1, xs: 2.5 }, mb: { md: 1, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.2
                  }}
                >
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#37474f' }}>Steps to a Better Feature</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.4
                  }}
                >
                  <Typography sx={{ color: '#607d8b' }}>Explore the Demos of Able Pro in multiple technologies.</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.6
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#37474f', mt: 2 }}>Explore</Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              {Technologies.map((tech, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <FadeInWhenVisible>
                    <MainCard
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover .overlay': tech.title !== 'Breathing' ? { opacity: 0.5 } : {},
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box
                          className="overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',  // Cover the entire container
                            height: '100%',  // Cover the entire container
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            cursor: 'pointer',
                            zIndex: 1,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            borderRadius: '12px', // Rounded edges to match container
                          }}
                          onClick={handleLockClick}
                        >
                          <LockIcon sx={{ fontSize: '3rem' }} />
                        </Box>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            {tech.trending && (
                              <Badge badgeContent="TRENDING" color="error" variant="light">
                                <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />
                              </Badge>
                            )}
                            {!tech.trending && <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />}
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#37474f' }}>{tech.title}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ color: '#607d8b' }}>{tech.description}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={2} justifyContent="flex-start">
                              <Grid item>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  size="large"
                                  startIcon={<ExportSquare />}
                                  component={Link}
                                  href={tech.preview}
                                  target="_blank"
                                  sx={{
                                    fontWeight: 500,
                                    bgcolor: 'secondary.light',
                                    color: 'secondary.darker',
                                    transition: 'all 0.3s ease',
                                    '&:hover': { color: 'secondary.lighter', transform: 'translateY(-2px)' }
                                  }}
                                >
                                  Start
                                </Button>
                              </Grid>
                              {!(tech.free == null) && (
                                <Grid item>
                                  <Link component={RouterLink} to={tech.preview}>
                                    <IconButton
                                      size="large"
                                      shape="rounded"
                                      color="secondary"
                                      sx={{
                                        bgcolor: 'secondary.lighter',
                                        color: 'secondary.darker',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { color: 'secondary.lighter', bgcolor: 'secondary.darker', transform: 'translateY(-2px)' }
                                      }}
                                    >
                                      <DocumentDownload />
                                    </IconButton>
                                  </Link>
                                </Grid>
                              )}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </MainCard>
                  </FadeInWhenVisible>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
