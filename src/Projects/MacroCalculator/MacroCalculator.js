import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';

import InputForm from './Components/InputForm';
import OutputForm from './Components/OutputForm';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

const MacroCalculator = (props) => {
  const [weight, setWeight] = React.useState('');
  const [heightFt, setHeightFt] = React.useState('');
  const [heightIn, setHeightIn] = React.useState('');
  const [age, setAge] = React.useState('');
  const [activity, setActivity] = React.useState('');
  const [weightChange, setWeightChange] = React.useState('');

  const [BMR, setBMR] = React.useState('');
  const [BMRAdjusted, setBMRAdjusted] = React.useState('');
  const [BMRGoal, setBMRGoal] = React.useState('');

  const [protien, setProtien] = React.useState('');
  const [carbs, setCarbs] = React.useState('');
  const [fat, setFat] = React.useState('');

  const [macroBreakdown, setMacroBreakdown] = React.useState({
    carbs: 0.45,
    protien: 0.3,
    fat: 0.25,
  });

  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = () => {
    calcBMR();
    setSubmitted(true);
  };

  const calcBMR = () => {
    const bmr = Math.floor(
      66.47 +
        6.24 * parseInt(weight) +
        12.47 * (parseInt(heightFt) * 12 + parseInt(heightIn)) -
        6.755 * parseInt(age)
    );

    const bmrAdjusted = Math.floor(bmr * activity);
    const bmrGoal = Math.floor(bmrAdjusted + weightChange);

    setBMR(bmr);
    setBMRAdjusted(bmrAdjusted);
    setBMRGoal(bmrGoal);
    calcMacros(bmrGoal, macroBreakdown);
  };

  const calcMacros = (bmrGoal, macro) => {
    setProtien(Math.floor((bmrGoal * macro.protien) / 4));
    setCarbs(Math.floor((bmrGoal * macro.carbs) / 4));
    setFat(Math.floor((bmrGoal * macro.fat) / 9));
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <h1>Macro Calculator</h1>

        <InputForm
          weight={weight}
          setWeight={setWeight}
          heightFt={heightFt}
          setHeightFt={setHeightFt}
          heightIn={heightIn}
          setHeightIn={setHeightIn}
          age={age}
          setAge={setAge}
          activity={activity}
          setActivity={setActivity}
          weightChange={weightChange}
          setWeightChange={setWeightChange}
          submitted={submitted}
          setSubmitted={setSubmitted}
          onSubmit={onSubmit}
        />

        <OutputForm
          weightChange={weightChange}
          setWeightChange={setWeightChange}
          submitted={submitted}
          setSubmitted={setSubmitted}
          BMR={BMR}
          BMRAdjusted={BMRAdjusted}
          BMRGoal={BMRGoal}
          protien={protien}
          carbs={carbs}
          fat={fat}
          macroBreakdown={macroBreakdown}
          setMacroBreakdown={setMacroBreakdown}
          calcMacros={calcMacros}
        />
      </Container>
    </Box>
  );
};

export default MacroCalculator;
