import { Box, IconButton } from '@mui/material';
import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WeatherBox from '../weather-box/weather-box';

interface Props {
  onClick: () => void;
}

const ForecastSwitchButton: FC<Props> = ({ onClick }) => {
  return (
    <Box style={{ margin: '10px' }}>
      <WeatherBox>
        <IconButton
          size='medium'
          sx={{ borderRadius: 'inherit' }}
          onClick={onClick}
        >
          <MenuIcon fontSize='inherit' />
        </IconButton>
      </WeatherBox>
    </Box>
  );
};

export default ForecastSwitchButton;
