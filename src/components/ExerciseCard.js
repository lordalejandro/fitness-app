import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button 
        sx={{ 
          ml: '20px',
          mt: '10px', 
          color: '#fff', 
          fontWeight: 'bold',
          backgroundColor: '#1e40af',
          borderRadius: '20px', 
          textTransform: 'capitalize' 
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button 
        variant="text"
        sx={{ 
          ml: '20px', 
          mt: '8px', 
          color: '#fff', 
          fontWeight: 'bold',
          textTransform: 'capitalize' 
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <h4 className="mt-6 text-center tracking-wide text-gray-800 text-xl sm:text-xl md:text-3xl">
      {exercise.name}
    </h4>
  </Link>
);

export default ExerciseCard;