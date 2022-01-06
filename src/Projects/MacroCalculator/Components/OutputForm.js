import React, { useEffect, useState } from 'react';
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
import Graph from './Graph';

import { makeStyles } from '@material-ui/core';

import Message from './Message';

const OutputForm = ({
  weightChange,
  setWeightChange,
  submitted,
  BMR,
  BMRAdjusted,
  BMRGoal,
  protien,
  carbs,
  fat,
  macroBreakdown,
  setMacroBreakdown,
  calcMacros,
}) => {
  const [options, setOptions] = React.useState('balanced');

  const [open, setOpen] = React.useState(false);
  const [modalContext, setModalContext] = React.useState('');

  const handleOpen = (context) => {
    setModalContext(context);
  };
  const handleClose = () => setOpen(false);

  const setCut = () => {
    handleClose();
    setWeightChange(-500);
    setMacroBreakdown({
      carbs: 0.42,
      protien: 0.38,
      fat: 0.2,
    });
  };

  const setBulk = () => {
    handleClose();
    setWeightChange(500);
    setMacroBreakdown({
      carbs: 0.42,
      protien: 0.28,
      fat: 0.3,
    });
  };

  // Conrols pop up modal
  useEffect(() => {
    if (modalContext !== '') {
      setOpen(true);
    }
  }, [modalContext]);

  // updates Macros whenever the macroBreakdown changes
  useEffect(() => {
    calcMacros(BMRGoal, macroBreakdown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [macroBreakdown]);

  return (
    <Box>
      <Message
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalContext={modalContext}
        setMacroBreakdown={setMacroBreakdown}
        calcMacros={calcMacros}
        BMRGoal={BMRGoal}
        setWeightChange={setWeightChange}
        setCut={setCut}
        setBulk={setBulk}
        setOptions={setOptions}
      />

      {submitted && (
        <Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
            style={{ paddingTop: '20px' }}
          >
            <TextField
              id="bmr"
              label="Basal Metabolic Rate (BMR)"
              variant="outlined"
              value={`${BMR} cal`}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="bmr-adjusted"
              label="BMR Adjusted"
              variant="outlined"
              value={`${BMRAdjusted} cal`}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="bmr-goal"
              label={`Goal Calories (${
                weightChange >= 0 ? '+' : ''
              } ${weightChange} calories) `}
              variant="outlined"
              value={`${BMRGoal} cal`}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>

          <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Customization Options
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="options"
                    name="row-radio-buttons-group"
                    defaultValue="balanced"
                  >
                    <FormControlLabel
                      value="balanced"
                      control={<Radio />}
                      checked={options === 'balanced'}
                      label="Balanced"
                      onClick={() => {
                        setMacroBreakdown({
                          carbs: 0.45,
                          protien: 0.3,
                          fat: 0.25,
                        });
                        setModalContext('');
                        setOptions('balanced');
                      }}
                    />
                    <FormControlLabel
                      value="high-carb"
                      control={<Radio />}
                      checked={options === 'high-carb'}
                      label="High Carb"
                      onClick={() => {
                        setMacroBreakdown({
                          carbs: 0.5,
                          protien: 0.3,
                          fat: 0.2,
                        });
                        setModalContext('');
                        setOptions('high-carb');
                      }}
                    />
                    <FormControlLabel
                      value="low-carb"
                      control={<Radio />}
                      checked={options === 'low-carb'}
                      label="Low Carb"
                      onClick={() => {
                        setMacroBreakdown({
                          carbs: 0.4,
                          protien: 0.3,
                          fat: 0.3,
                        });
                        setModalContext('');
                        setOptions('low-carb');
                      }}
                    />
                    <FormControlLabel
                      value="cut"
                      control={<Radio />}
                      checked={options === 'cut'}
                      label="BodyBuilder Cut"
                      onClick={() => {
                        handleOpen('cut');
                        // setOptions('cut');
                      }}
                    />
                    <FormControlLabel
                      value="bulk"
                      control={<Radio />}
                      checked={options === 'bulk'}
                      label="BodyBuilder Clean Bulk"
                      onClick={() => {
                        handleOpen('bulk');
                        // setOptions('bulk');
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Graph macroBreakdown={macroBreakdown} />
              </Grid>
              <Grid
                item
                xs={1}
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                  paddingLeft: '20px',
                  flexDirection: 'column',
                }}
              >
                <Box
                  marginTop="125px"
                  width="25px"
                  height="25px"
                  backgroundColor="#FDCA40"
                />

                <Box
                  marginTop="55px"
                  width="25px"
                  height="25px"
                  backgroundColor="#61210F"
                />

                <Box
                  marginTop="55px"
                  width="25px"
                  height="25px"
                  backgroundColor="#3066BE"
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1.5, width: '15ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  style={{ paddingTop: '100px' }}
                >
                  <TextField
                    id="carbs"
                    label="Carbs"
                    variant="outlined"
                    value={`${carbs} g`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="carbs-percent"
                    label=""
                    variant="outlined"
                    value={`${Math.round(
                      Math.round(macroBreakdown.carbs * 100)
                    )}%`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    id="protien"
                    label="Protien"
                    variant="outlined"
                    value={`${protien} g`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="protien-percent"
                    label=""
                    variant="outlined"
                    value={`${Math.round(macroBreakdown.protien * 100)}%`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    id="fat"
                    label="Fat"
                    variant="outlined"
                    value={`${fat} g`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="fat-percent"
                    label=""
                    variant="outlined"
                    value={`${macroBreakdown.fat * 100}%`}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default OutputForm;
