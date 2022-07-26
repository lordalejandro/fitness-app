import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [exercisesPerPage] = useState(6);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1340, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box 
      id="exercises" 
      sx={{ mt: { lg: '10px' } }} 
      mt="50px" 
      p="20px"
    >
      <h4 className="mb-8 ml-10 sm:ml-6 md:ml-10 text-left tracking-tight font-extrabold text-gray-800 text-3xl sm:text-4xl md:text-5xl">
        showing results...
      </h4>
      <Stack 
        direction="row" 
        sx={{ gap: { lg: '100px', xs: '50px' } }} 
        flexWrap="wrap" 
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises