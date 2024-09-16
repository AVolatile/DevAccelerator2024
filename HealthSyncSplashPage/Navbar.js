import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img 
        src="/assets/images/txtDarkMode.png"  // Use an absolute path
        alt="logo" 
        style={{ 
          width: '250px', 
          height: 'auto', 
          objectFit: 'cover', 
          margin: '0px 20px'
        }} 
      />
    </Link>
    <Stack
      direction="row"
      gap="50px"
      fontFamily="Alegreya"
      fontSize="30px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fefefe', borderBottom: '3px solid #fefefe' }}>Home</Link>
      <Link to="/about-us" style={{ textDecoration: 'none', color: '#fefefe' }}>About Us</Link>
    </Stack>
  </Stack>
);

export default Navbar;
