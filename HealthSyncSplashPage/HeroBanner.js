import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#4A90E2" fontWeight="600" fontSize="26px"></Typography>
      <Typography color='#fefefe' fontWeight={90} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="px" mt="30px">
        AI Fitness: <br />
        Your Personalized Journey
      </Typography>
      <Typography color='#fefefe' fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Your Supercharged Health & Fitness Powerhouse, Always One Step Ahead.
      </Typography>
      <Stack>
        <a 
          href="/about-us" 
          style={{ 
            marginTop: '45px', 
            textDecoration: 'none', 
            width: '200px', 
            textAlign: 'center', 
            background: '#4A90E2', 
            padding: '14px', 
            fontSize: '22px', 
            textTransform: 'none', 
            color: 'white', 
            borderRadius: '4px' 
          }}>
          Our Story
        </a>
      </Stack>

      <Typography fontWeight={400} color="#4A90E2" sx={{ opacity: '0.4', display: { lg: 'block', xs: 'none' }, fontSize: '100px' }}>
        JOIN THE WAITLIST
      </Typography>
      <img src="/assets/images/Splashpage_phone.png" alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
