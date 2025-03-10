import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { putCity } from '../../../store/slices/citySlice';
import { InputCityWrapper } from './input-city.styles';
import { curLabel } from '../../../common/lang/lang';
import { putTheCityInLocalStorage } from './input-city.helpers';

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
    putTheCityInLocalStorage(value);
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
        label={curLabel.InputCity.LABEL}
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
