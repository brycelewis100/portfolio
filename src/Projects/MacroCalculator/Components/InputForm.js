import React, { useEffect } from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';

import { activityLevelOptions, weightChangeOptions } from '../Assets/options';

const InputForm = ({
  weight,
  setWeight,
  heightFt,
  setHeightFt,
  heightIn,
  setHeightIn,
  age,
  setAge,
  activity,
  setActivity,
  weightChange,
  setWeightChange,
  submitted,
  onSubmit,
}) => {
  useEffect(() => {
    if (submitted) {
      onSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weight, heightFt, heightIn, age, activity, weightChange]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="weight"
        label="Weight (lb)"
        variant="outlined"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <TextField
        id="height-ft"
        label="Height (ft)"
        variant="outlined"
        value={heightFt}
        onChange={(e) => {
          setHeightFt(e.target.value);
        }}
      />
      <TextField
        id="height-in"
        label="Height (in)"
        variant="outlined"
        value={heightIn}
        onChange={(e) => {
          setHeightIn(e.target.value);
        }}
      />
      <TextField
        id="age"
        label="Age"
        variant="outlined"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <TextField
        id="activity-level"
        select
        label="Activity Level"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
      >
        {activityLevelOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="weekly-weight-change"
        select
        label="Weekly Weight Change"
        value={weightChange}
        onChange={(e) => {
          setWeightChange(e.target.value);
          if (submitted) {
            onSubmit();
          }
        }}
      >
        {weightChangeOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button onClick={() => onSubmit()} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default InputForm;
