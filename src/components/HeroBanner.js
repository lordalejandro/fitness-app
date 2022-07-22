import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box 
      sx={{ 
        mt: { lg: '70px', xs: '70px' }, 
        ml: { sm: '50px' } }} 
      position="relative" 
      p="20px"
    >
      <Typography 
        color="#323EAC" 
        fontFamily="Futura"
        fontSize="90px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontFamily="Futura" 
        sx={{ fontSize: { lg: '44px', xs: '40px' } }} 
        mb="30px" 
        mt="30px"
        color="gray"
        lineHeight="44px"
        letterSpacing="3px"
      >
        "It Never Gets Easier<br />You Just Get Stronger"
      </Typography>
      <Typography 
        fontSize="22px" 
        fontFamily="Futura" 
        width="600px"
      >
        Check out out large variety of effective exercises personalized for you
      </Typography>
      <Stack>
        <Button 
          variant="contained"
          href="#exercises" 
          style={{ 
            backgroundColor: '#323EAC',
            marginTop: '45px', 
            fontFamily: 'Futura',
            width: '300px', 
            textAlign: 'center', 
            padding: '12px', 
            fontSize: '20px', 
            textTransform: 'none', 
            color: 'white', 
            borderRadius: '30px',
          }}
        >
          Explore Exercises
        </Button>
      </Stack>
      <Typography 
        fontWeight={600} 
        color="#323EAC" 
        sx={{ 
          opacity: '0.1', 
          display: { lg: 'block', xs: 'none' }, 
          fontSize: '200px' 
        }}
      >
        Fitness Club
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner