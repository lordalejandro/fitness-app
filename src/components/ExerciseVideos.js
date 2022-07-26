import React from 'react';
import { Box, Stack } from '@mui/material';

import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box className="ytVideos-section">
      <h3 className="tracking-tight font-extrabold text-gray-800 text-2xl md:text-4xl md:mb-5 text-left md:text-center p-[20px]">
        Watch more <span className="text-indigo-600 capitalize">{name}</span> exercise videos...
      </h3>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '60px', xs: '30px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '40px', borderBottomRightRadius: '40px', boxShadow: '5px 5px 20px #00000033', height: '212px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <p className="text-gray-800 tracking-tight text-lg md:text-xl mb-1">
                {item.video.title}
              </p>
              <p className="text-gray-500 tracking-tight text-md md:text-lg">
                {item.video.channelName}
              </p>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos