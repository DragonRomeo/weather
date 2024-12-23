import React, { useState } from 'react';
import { inputCityConsts } from './input-city.consts';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { putCity } from '../../../store/slices/citySlice';
import { InputCityWrapper } from './input-city.styles';

const InputCity = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (!value.length) {
      return;
    }
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
        label={inputCityConsts.label}
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
