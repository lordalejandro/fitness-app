import React from 'react';
import { Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '30px', xs: '0px' } }}>
      <h3 className="tracking-tight font-extrabold text-gray-800 mt-6 md:mt-2 text-2xl md:text-4xl text-left md:text-center p-[20px]">
        Similar <span className="text-indigo-600 capitalize">target muscle</span> exercises...
      </h3>
      <Stack direction="row" sx={{ py: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <h3 className="tracking-tight font-extrabold text-gray-800 mt-6 md:mt-2 text-2xl md:text-4xl text-left md:text-center p-[20px]">
        Similar <span className="text-indigo-600 capitalize">Equipment</span> exercises...
      </h3>
      <Stack direction="row" sx={{ py: 2, position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises