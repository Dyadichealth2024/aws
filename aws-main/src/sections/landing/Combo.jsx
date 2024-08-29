import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import { useNavigate } from 'react-router-dom';
import videoList from './videoList';

export default function ComboPage() {
  const initialVideoId = videoList[0].id;
  const [selectedVideo, setSelectedVideo] = useState(initialVideoId);
  const [videosPlayed, setVideosPlayed] = useState([]);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [initialVideoPlayed, setInitialVideoPlayed] = useState(false);

  const navigate = useNavigate();

  const handleVideoSelect = (videoId) => {
    const totalVideosAllowed = 2;
    const isInitialVideo = videoId === initialVideoId;

    if (isInitialVideo && !initialVideoPlayed) {
      setInitialVideoPlayed(true);
      if (videosPlayed.length < totalVideosAllowed) {
        setVideosPlayed((prevPlayed) => [...prevPlayed, videoId]);
      }
      setShouldAutoplay(true);
    } else if (!isInitialVideo && !videosPlayed.includes(videoId) && videosPlayed.length < totalVideosAllowed) {
      setVideosPlayed((prevPlayed) => [...prevPlayed, videoId]);
      setShouldAutoplay(true);
    } else {
      setShouldAutoplay(false);
    }

    setSelectedVideo(videoId);
  };

  const handleInitialVideoPlay = () => {
    if (!initialVideoPlayed) {
      setInitialVideoPlayed(true);
      if (videosPlayed.length < 2) {
        setVideosPlayed((prevPlayed) => [...prevPlayed, initialVideoId]);
      }
    }
  };

  const handleContinue = () => {
    console.log('Navigating to course with data:', { videoList, videosPlayed });
    navigate('/course', { state: { videoList, videosPlayed } });
  };

  const selectedVideoData = videoList.find((video) => video.id === selectedVideo);
  const shouldShowContinueOverlay = videosPlayed.length >= 2 && !videosPlayed.includes(selectedVideo);

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '70vh', p: 3 }}>
      <Container>
        <Box sx={{ mb: 5, mt: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Learning Resources
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <MainCard sx={{ height: '10cm', overflowY: 'auto', backgroundColor: '#80b3ff' }}>
              <Grid container spacing={2}>
                {videoList.map((video, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    onClick={() => handleVideoSelect(video.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Stack spacing={1} alignItems="center">
                      <Typography variant="body2" align="center" noWrap>
                        {video.title}
                      </Typography>
                      <CardMedia
                        component="img"
                        image={video.thumbnail}
                        sx={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain' }}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard sx={{ height: '10cm', backgroundColor: '#80b3ff' }}>
              {shouldShowContinueOverlay ? (
                <Box onClick={handleContinue} sx={{ position: 'relative', width: '100%', maxWidth: '100%', height: 'auto', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    image={selectedVideoData.thumbnail}
                    sx={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
                  />
                  <Typography variant="h6" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', p: '10px', borderRadius: '5px', textAlign: 'center' }}>
                    Continue to Course
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                  <Box
                    component="iframe"
                    src={`https://www.youtube.com/embed/${selectedVideo}${shouldAutoplay ? '?autoplay=1' : ''}`}
                    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onPlay={selectedVideo === initialVideoId ? handleInitialVideoPlay : undefined}
                  />
                </Box>
              )}
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
