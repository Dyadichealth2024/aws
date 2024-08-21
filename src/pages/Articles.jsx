import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import MainCard from 'components/MainCard';  // Keep the imported MainCard here
import { useNavigate } from 'react-router-dom';
import Artical1 from "../assets/images/articles/article1.png";
import Artical2 from "../assets/images/articles/article2.png";
// Sample articles data using the uploaded image
const articles = [
  {
    imgSrc: Artical1, 
    content: "Content for article on Dyadic Health...",
  },
  {
    imgSrc: Artical2, 
    content: "Content for article on Dyadic Health...",
  },
  // ... add more articles as needed
];

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  background-color: #80b3ff; /* Previous light blue color */
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ArticleCard = styled.div`
  min-width: 100px;
  height: 100%;
  background: ${props => props.bgColor || '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* Align items to the top */
  align-items: center;
  padding: 0;
  margin: 0;
  &:hover {
    transform: scale(1.05);
  }
`;

const ArticleTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 0; /* Remove margin */
  padding: 10px; /* Add padding to control spacing */
  background-color: ${props => props.bgColor || 'inherit'};
  width: 100%; /* Ensure the title takes full width */
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Cover ensures the image fully fills its container */
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
  flex-grow: 1; /* Allow the image to take up the remaining space */
`;

export default function ComboPage() {
  const [selectedContent, setSelectedContent] = useState(articles[0]);

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleArticleSelect = (article) => {
    setSelectedContent(article);
  };

  const containerStyle = {
    height: '10cm',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '70vh', padding: 3 }}>
      <Container>
        <Box sx={{ marginBottom: 5, marginTop: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Article Gallery
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <StyledMainCard style={containerStyle}>
              <ArticleContainer ref={containerRef}>
                {articles.map((article, index) => (
                  <ArticleCard key={index} onClick={() => handleArticleSelect(article)}>
                    <ArticleTitle variant="h6" bgColor="#80b3ff">
                      {article.title}
                    </ArticleTitle>
                    <ArticleImage src={article.imgSrc} alt={article.title} />
                  </ArticleCard>
                ))}
              </ArticleContainer>
            </StyledMainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledMainCard style={containerStyle}>
              <Typography variant="h5" gutterBottom>
                {selectedContent.title}
              </Typography>
              <Typography variant="body1">
                {selectedContent.content}
              </Typography>
            </StyledMainCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

