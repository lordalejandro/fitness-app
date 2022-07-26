import React from 'react';
import { Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target2.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
          icon: BodyPartImage,
          name: bodyPart,
        },
        {
          icon: TargetImage,
          name: target,
        },
        {
          icon: EquipmentImage,
          name: equipment,
        },
      ];

  return (
    <Stack sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center', gap: { lg: '100px', xs: '20px' } }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <h3 className="tracking-tight font-extrabold text-indigo-600 text-4xl md:text-6xl capitalize">
            {name}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl">
          Exercises keep you strong.{' '}
          <span className="font-bold capitalize">{name} </span> 
            is one of the best exercises to target your 
          <span className="capitalize font-bold"> {target}</span>.<br />
            It will help you improve your mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button disabled sx={{ background: '#4f46e5', borderRadius: '50%', width: '80px', height: '80px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '35px', height: '35px' }} />
            </Button>
            <p className="capitalize text-gray-800 text-2xl md:text-2xl">
              {item.name}
            </p>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail