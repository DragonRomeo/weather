import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';

interface Props {
  label: string;
  values: Array<string>;
  callback: (value: string) => void;
}

const BasicSelect: FC<Props> = ({ label, values, callback }) => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const target: string = event.target.value;
    setAge(target);
    setTimeout(() => callback(target), 1000);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='simple-select-label'>{label}</InputLabel>
        <Select
          labelId='simple-select-label'
          id='simple-select'
          value={age}
          label={label}
          onChange={handleChange}
        >
          {values.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
