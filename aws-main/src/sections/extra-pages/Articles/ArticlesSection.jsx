import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

// Correctly importing the images
import Artical1 from '../../../assets/images/articles/article1.png';
import Artical2 from '../../../assets/images/articles/article2.png';
import Artical3 from '../../../assets/images/articles/article3.png';
import Artical4 from '../../../assets/images/articles/article4.png';
import Artical5 from '../../../assets/images/articles/article5.png';

const articles = [
  {
    imgSrc: Artical1,
    content: "1",
  },
  {
    imgSrc: Artical2,
    content: "2",
  },
  {
    imgSrc: Artical3,
    content: "3",
  },
  {
    imgSrc: Artical4,
    content: "4",
  },
  {
    imgSrc: Artical5,
    content: "5",
  },
];

export default function ArticlesSection() {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <Container maxWidth="100" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardActionArea onClick={() => handleCardClick(article.link)}>
                <CardMedia
                  component="img"
                  height="1000" // Adjusted height to better fit images
                  image={article.imgSrc}
                  alt={article.content}
                  sx={{ objectFit: 'cover' }} // Ensures the image covers the card area nicely
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {article.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
