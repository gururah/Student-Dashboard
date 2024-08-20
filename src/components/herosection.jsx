import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import heroImage from '../../public/heroimage.png';

const HeroSection = () => {
  return (
      <Container sx={{width:'1440',height:'599'}}>
        <Box py={10}>
          <Grid container spacing={2} alignItems='left'  fontSize={{xs:'24px'}}>
            <Grid item xs={12} md={8} sm={6}>
            <Box textAlign={{ xs: 'center', md: 'left', sm: 'left' }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ color: '#696969' }} 
              >
                Lessons and insights
              </Typography>
              <Typography
                variant="h3"
                // component="h3"
                gutterBottom
                sx={{ color: 'green' }}
              >
                from 8 years
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: '#708090' }} 
              >
                Where to grow your business as a photographer: site or social media?
              </Typography>
              <br/>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'green',
                  '&:hover': {
                    backgroundColor: 'darkgreen',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end',sm:'flex-end' }}>
              <img src={heroImage} alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
