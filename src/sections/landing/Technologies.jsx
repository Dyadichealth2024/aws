import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Badge, Grid, Button, Link, Container, CardMedia, Typography, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './Animation'; // Assuming this is a custom animation component
import MainCard from 'components/MainCard'; // Custom card component
import { DocumentDownload, ExportSquare } from 'iconsax-react'; // Import icons as needed

// Dummy Icons (replace these with your actual icon paths)
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techMui from 'assets/images/landing/tech-mui.svg';
import techAngular from 'assets/images/landing/tech-angular.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techVue from 'assets/images/landing/tech-vuetify.svg';
import techNextJS from 'assets/images/landing/tech-nextjs.svg';

// Dummy Data for Technologies
const Technologies = [
  {
    trending: false,
    icon: techNet,
    title: 'Introduction',
    description: 'Blending the physical health of a self into the realm of dyadic relationships.',
    route: '/introduction',
    free: true
  },
  {
    trending: false,
    icon: techBootstrap,
    title: 'Breathing',
    description: 'Emotional regulation through improvement of breathing patterns & respiratory health.',
    route: '/breathing',
    free: false
  },
  {
    trending: false,
    icon: techMui,
    title: 'Posture',
    description: 'Quality interactions within Dyads through improvement of energy and emotional aspects.',
    route: '/posture',
    free: false
  },
  {
    trending: false,
    icon: techVue,
    title: 'Diet',
    description: 'Nutrient-rich foods reduce stress and increase emotional stability, leading to fewer conflicts.',
    route: '/diet',
    free: false
  },
  {
    trending: false,
    icon: techAngular,
    title: 'Workouts',
    description: 'Strengthen dyadic relationships by promoting shared activities and mutual support.',
    route: '/workouts',
    free: false
  },
  {
    trending: false,
    icon: techNextJS,
    title: 'Recovery',
    description: 'Enhance dyadic relationships by promoting shared relaxation and recovery activities.',
    route: '/recovery',
    free: false
  }
];

// Main Component
const TechnologiesPage = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [completedCourses, setCompletedCourses] = useState(0); // Track completed courses
  const alertRef = useRef(null);

  const handleLockClick = (courseTitle) => {
    setAlertMessage(`Complete the ${courseTitle} course first.`);
  };

  const handleCourseComplete = () => {
    setCompletedCourses(completedCourses + 1);
    setAlertMessage('');
  };

  useEffect(() => {
    if (alertMessage && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [alertMessage]);

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '70vh', padding: 3 }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 1, xs: 2.5 }, mb: { md: 1, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, translateY: 550 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#37474f' }}>Strengthen Your Personal Foundation</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, translateY: 550 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}>
                  <Typography sx={{ color: '#607d8b' }}>Activities that help strengthen your personal foundation in Dyadic Health</Typography>
                </motion.div>
              </Grid>
              {alertMessage && (
                <Grid item xs={12}>
                  <Alert
                    severity="warning"
                    ref={alertRef}
                    action={
                      <IconButton aria-label="close" color="inherit" size="small" onClick={() => setAlertMessage('')}>
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{
                      mb: 1,
                      backgroundColor: '#fff3e0',
                      color: '#d84315',
                      borderRadius: '8px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    {alertMessage}
                  </Alert>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              {Technologies.map((tech, index) => {
                const isLocked = index > completedCourses;
                const showArrow = tech.title === 'Introduction' && !isLocked;

                return (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        '&:hover .lock-overlay': { opacity: 1 }, // Hover effect to show lock
                      }}
                    >
                      {isLocked && (
                        <Box
                          className="lock-overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            zIndex: 1,
                            opacity: 0, // Initially hidden
                            transition: 'opacity 0.3s ease, background-color 0.3s ease',
                          }}
                          onClick={() => handleLockClick(tech.title)}
                        >
                          <LockIcon sx={{ fontSize: '4rem' }} />
                        </Box>
                      )}
                      <FadeInWhenVisible>
                        <MainCard sx={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
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
                              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#37474f' }}>
                                {tech.title}
                              </Typography>
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
                                    startIcon={showArrow ? <ExportSquare /> : <LockIcon />}
                                    component={RouterLink}
                                    to={tech.route}
                                    onClick={() => {
                                      console.log(`Navigating to ${tech.route}`);
                                      if (!isLocked) handleCourseComplete();
                                    }}
                                    sx={{
                                      fontWeight: 500,
                                      bgcolor: isLocked ? 'grey.500' : 'secondary.light',
                                      color: isLocked ? 'white' : 'secondary.darker',
                                      transition: 'all 0.3s ease',
                                      '&:hover': {
                                        color: isLocked ? 'grey.100' : 'secondary.lighter',
                                        transform: 'translateY(-2px)',
                                      },
                                    }}
                                  >
                                    {isLocked ? 'Locked' : 'Start'}
                                  </Button>
                                </Grid>
                                {!isLocked && tech.free && (
                                  <Grid item>
                                    <Link component={RouterLink} to={tech.route}>
                                      <IconButton
                                        size="large"
                                        shape="rounded"
                                        color="secondary"
                                        sx={{
                                          bgcolor: 'secondary.lighter',
                                          color: 'secondary.darker',
                                          transition: 'all 0.3s ease',
                                          '&:hover': {
                                            color: 'secondary.lighter',
                                            bgcolor: 'secondary.darker',
                                            transform: 'translateY(-2px)',
                                          }
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
                        </MainCard>
                      </FadeInWhenVisible>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesPage;
