import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import MainCard from 'components/MainCard'; // Using MainCard as imported
import { useNavigate } from 'react-router-dom';
import Artical1 from '../assets/images/articles/article1.png';
import Artical2 from '../assets/images/articles/article2.png';
import Artical3 from '../assets/images/articles/article3.png';
import Artical4 from '../assets/images/articles/article4.png';
import Artical5 from '../assets/images/articles/article5.png';
import Artical6 from '../assets/images/articles/article6.png';

const articles = [
  {
    tittle: "",
    imgSrc: Artical1,
    content: '1',
  },
  {
    imgSrc: Artical2,
    content: '2',
  },
  {
    imgSrc: Artical3,
    content: '3',
  },
  {
    imgSrc: Artical4,
    content: '4',
  },
  {
    imgSrc: Artical5,
    content: '5',
  },
  {
    tittle: "how to turn your parent-chaild  relationship into the familes secrets sause of happiness",
    imgSrc: Artical6,
    content:
      '👨‍👩‍👧‍👦 Cracking the Code to a Happier Family 🏡 \n What if the secret to a happier family was right under your nose? 🤔 Turns out, it’s all in the way you connect with your kids! \n Dads as the unsung heroes of family joy, moms adding that special touch—there’s so much more to family dynamics than you might think. And get this: A simple question like “What made you smile today?” can turn an ordinary day into something unforgettable. 😄\n 👉 Want to know how to supercharge your family’s happiness? Dive into my latest article and discover the little things that make a big difference!',
  },
];

const ArticleContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
  position: relative;
  max-width: 100%;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  ${(props) => (props.direction === 'left' ? 'left: 0;' : 'right: 0;')}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ArticleCard = styled.div`
  flex: 1 0 150px;
  max-width: 200px;
  height: 100%;
  background: #80b3ff; /* This matches the MainCard background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin: 0;
  padding: 10px;
  background-color: ${(props) => props.bgColor || 'inherit'};
  width: 100%;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 0;
  padding: 0;
  flex-grow: 1;
`;

// New styled component for the white box
const ContentBox = styled.div`
  background-color: #ffffff; /* White background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow-y: auto; /* Allows scrolling if content overflows */
`;

export default function ComboPage() {
  const [selectedContent, setSelectedContent] = useState(articles[0]);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        top: 0,
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const containerStyle = {
    height: '10cm',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80b3ff', /* Set this to the desired background color */
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '70vh', padding: 3 }}>
      <Container>
        <Box sx={{ marginBottom: 5, marginTop: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Learning Resources
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {/* Left Side: Article Scrollable Container */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '10cm',
            }}
          >
            <MainCard
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#80b3ff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ScrollButton direction="left" onClick={() => handleScroll('left')}>
                ←
              </ScrollButton>
              <ArticleContainer
                ref={containerRef}
                style={{
                  flexGrow: 1,
                  width: '100%',
                  overflowX: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                {articles.map((article, index) => (
                  <ArticleCard key={index} onClick={() => setSelectedContent(article)}>
                    <ArticleTitle variant="h6" bgColor="#80b3ff">
                      {article.title}
                    </ArticleTitle>
                    <ArticleImage src={article.imgSrc} alt={article.title} />
                  </ArticleCard>
                ))}
              </ArticleContainer>
              <ScrollButton direction="right" onClick={() => handleScroll('right')}>
                →
              </ScrollButton>
            </MainCard>
          </Grid>

          {/* Right Side: Content Display Container */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '10cm',
            }}
          >
            <MainCard
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#80b3ff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
              }}
            >
              <ContentBox>
                <Typography variant="h5" gutterBottom>
                  {selectedContent.title || 'Article Title'}
                </Typography>
                <Typography variant="body1">
                  {selectedContent.content || 'Article Content'}
                </Typography>
              </ContentBox>
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}