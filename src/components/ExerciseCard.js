import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '10px' }}>
      <button 
        style={{ 
          color: '#fff', 
          backgroundColor: '#1e40af',
          borderRadius: '20px',
          padding: '5px 16px', 
          textTransform: 'capitalize' 
        }}
      >
        {exercise.bodyPart}
      </button>
      <button 
        style={{ 
          color: '#fff', 
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </button>
    </Stack>
    <h4 className="mt-6 text-center tracking-wide text-gray-800 text-2xl md:text-3xl">
      {exercise.name}
    </h4>
  </Link>
);

export default ExerciseCard;