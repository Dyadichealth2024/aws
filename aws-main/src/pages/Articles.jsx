import React from 'react';
// other imports

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
  {
    imgSrc: Artical6,
    content: `How to Turn Your Parent-Child Relationship into the Family’s Secret Sauce for Happiness 👨‍👩‍👧‍👦 
    Cracking the Code to a Happier Family 🏡 What if the secret to a happier family was right under your nose? 🤔 
    Turns out, it’s all in the way you connect with your kids! Dads as the unsung heroes of family joy, moms adding that special touch—there’s so much more to family dynamics than you might think. 
    And get this: A simple question like “What made you smile today?” can turn an ordinary day into something unforgettable. 😄
    👉 Want to know how to supercharge your family’s happiness? Dive into my article and discover the little things that make a big difference!`
  },
];

export default function ArticlesSection() {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
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
                  height="200" // Adjusted height to better fit images
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
