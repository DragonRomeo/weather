import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { inputCityConsts } from './input-city.consts';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { putCity } from '../../../store/slices/citySlice';
import { MUISpacePx } from '../../../common/styles/consts';

const InputCityWrapper = styled('div')({
  width: inputCityConsts.width,
  marginTop: MUISpacePx * 5,
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
