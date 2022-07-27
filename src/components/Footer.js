import React from 'react';
import { Box, Stack } from '@mui/material';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Logo from '../assets/images/fitness-logo.png';

const Footer = () => {
  return (
    <Box mt="80px" className="bg-gray-100 border-t-4">
      <Stack
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        p="20px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px" }} />
      </Stack>
      <div>
        <p className="text-center tracking-wide text-gray-800 mt-2 text-xl md:text-2xl">
          website built by <a className="text-blue-800 hover:underline" href="https://avilaca.com" rel="noreferrer" target="_blank">@avilaca</a>
        </p>
        <ul className="flex text-center justify-center align-center py-4">
          <li className="mx-2 social-button">
            <a href="https://github.com/lordalejandro" rel="noreferrer" target="_blank">
              <AiFillGithub />
            </a>
          </li>
          <li className="mx-2 social-button">
            <a href="https://linkedin.com/in/ale-vilaca-26634a229" rel="noreferrer" target="_blank">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Footer;
