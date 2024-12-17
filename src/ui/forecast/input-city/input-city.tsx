import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { INPUT_CITY_LABEL, inputCityWidth } from './input-city.consts';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { putCity } from '../../../store/slices/citySlice';

const InputCityWrapper = styled('div')({
  width: inputCityWidth,
});

const InputCity = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(putCity(value));
    setValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <InputCityWrapper>
      <TextField
        value={value}
        label={INPUT_CITY_LABEL}
        variant='standard'
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton size='small' onClick={handleClick}>
                <SearchIcon fontSize='medium' />
              </IconButton>
            ),
          },
        }}
      ></TextField>
    </InputCityWrapper>
  );
};

export default InputCity;
