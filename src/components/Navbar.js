import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/avilaca-logo.png'

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="space-around" 
      sx={{ 
        gap: { sm: '123px', xs: '40px' }, 
        mt: { sm: '24px', xs: '20px' }, 
        justifyContent: 'none' 
      }} 
      px="20px"
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{  
            height: '32px', 
            margin: '0px 0px 0px 0px' 
          }} 
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Futura"
        fontSize="22px"
        alignItems="flex-end"
        margin="0 0 4px 0"
      >
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#000', 
              borderBottom: '2px solid #323EAC'
            }}
          >
            Home
          </Link>
          <a 
            href="#exercises" 
            style={{ 
              textDecoration: 'none', 
              color: '#000', 
              borderBottom: '2px solid #323EAC',
            }}
          >
            Exercises
          </a>
      </Stack>
    </Stack>
  )
}

export default Navbar