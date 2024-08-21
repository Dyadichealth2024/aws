import React from 'react';
import Container from '@mui/material/Container';
import VideoPlayer from 'src/sections/extra-pages/video/VideoGallerySection.jsx'; // Adjust the path as needed
import { useLocation } from 'react-router-dom';

export default function Video() {
  const location = useLocation();
  const { videoList = [], videosPlayed = [] } = location.state || {};

  console.log('Received videoList:', videoList);
  console.log('Received videosPlayed:', videosPlayed);

  const handleVideoEnd = (updatedViewedVideos) => {
    console.log('Updated viewed videos:', updatedViewedVideos);
    // Here you can save this updated list to local storage, send it to a backend, etc.
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h1>Course Page</h1>
      {videoList.length > 0 ? (
        <VideoPlayer videoList={videoList} videosPlayed={videosPlayed} onVideoEnd={handleVideoEnd} />
      ) : (
        <p>No videos to display</p>
      )}
    </Container>
  );
}
