import React from 'react';
import { Stack } from '@mui/material';

import Icon from '../assets/images/fitness-logo.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card border-2 border-gray-200"
    sx={{
      boxShadow: bodyPart === item ? '5px 5px 20px #00000033' : '',
      backgroundColor: '#f9f9f9',
      borderRadius: '35px',
      width: '270px',
      height: '280px', 
      cursor: 'pointer', 
      gap: '45px',
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1340, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="Gym Logo" style={{ height: '35px' }} />
    <p className='text-lg font-bold text-gray-800 sm:text-xl md:text-2xl'>
      {item}
    </p>
  </Stack>
);

export default BodyPart;