import React, { useState, useRef, useEffect } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

// project-imports
import FadeInWhenVisible from './Animation';

// Additional sentences corresponding to each category
const ADDITIONAL_INFO = {
  parenting: "Achieve Mutual Wellness",
  spousal_relationships: "Intimacy and more",
  family: "Through Love and Example",
  quality_relationships: "Quality Relationships"
};

const Technologies = [
  {
    title: 'Dyadic Health',
    category: 'parenting',
    description: 'All Dyadic relationships have an interdependence. Targeted activities focus on interconnectedness.'
  },
  {
    title: 'Spousal Dyad',
    category: 'spousal_relationships',
    description: "It fosters unity, empathy, intimacy and shared values.Targeted activities focus on each partner's health."
  },
  {
    title: 'Parental Dyad',
    category: 'family',
    description: 'It fosters guidance, security and loving bond with a child.Targeted activites focus on being a balanced parent.'
  },
  {
    title: 'Other Common Dyads',
    category: 'quality_relationships',
    description: 'On Average, we have several dyadic relationships.Targeted activities focus on collaborating effectively.'
  }
];

// ==============================|| LANDING - AppsPage ||============================== //

export default function AppsPage() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [chat, setChat] = useState([{ text: "Please select a category to get started.", isBot: true }]);
  const [activeCategory, setActiveCategory] = useState(null);
  const chatContainerRef = useRef(null);

  const handleChange = (index) => {
    const category = Technologies[index].category;
    setChat([
      { text: "Please select a category to get started.", isBot: true },
      { text: Technologies[index].description, isBot: true },
      { text: ADDITIONAL_INFO[category], isBot: true }
    ]);
    setSlideIndex(index);
    setActiveCategory(category);
  };

  // Automatically scroll to the bottom of the chat container when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chat]);

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, overflow: 'hidden', pt: { md: 10, xs: 5 }, position: 'relative' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Dyadic Health Improvement Training
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                  Engage with our chatbot by selecting a category to get started!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="start">
              <Grid item xs={12} md={6}>
                <Box pb={{ xs: 0, md: 10 }}>
                  <Grid container spacing={1.5} alignItems="center">
                    {Technologies.map((tech, index) => (
                      <Grid item xs={12} key={index}>
                        <FadeInWhenVisible>
                          <Button
                            onClick={() => handleChange(index)}
                            sx={{
                              p: 3,
                              borderRadius: 1.5,
                              ...(slideIndex === index && {
                                background: alpha(theme.palette.secondary.lighter, 0.13),
                                boxShadow: theme.customShadows.z1,
                                '&:hover': { background: alpha(theme.palette.secondary.lighter, 0.13), boxShadow: theme.customShadows.z1 }
                              })
                            }}
                            variant="light"
                          >
                            <Grid container textAlign="start" spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                  {tech.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography color="white">{tech.description}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </FadeInWhenVisible>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  ref={chatContainerRef}
                  sx={{
                    mt: 3,
                    width: '100%',
                    p: 3,
                    backgroundColor: 'white',  // Background color changed to white
                    borderRadius: 1.5,
                    color: theme.palette.text.primary,  // Adjusted text color to ensure readability
                    height: '600px',
                    overflowY: 'auto'
                  }}
                >
                  {chat.map((message, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: 'left',  // Bot messages are always on the left
                        mb: 2
                      }}
                    >
                      <Typography
                        sx={{
                          display: 'inline-block',
                          padding: '10px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(0, 153, 255, 1)', // Bot message background
                          color: theme.palette.primary.contrastText  // Bot message text color
                        }}
                      >
                        {message.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <IconButton
        aria-label="chat"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: alpha(theme.palette.secondary.main, 0.7),
          '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.main, 1),
          },
        }}
      >
        <ChatIcon sx={{ color: 'white', fontSize: 32 }} />
      </IconButton>
    </Box>
  );
}
