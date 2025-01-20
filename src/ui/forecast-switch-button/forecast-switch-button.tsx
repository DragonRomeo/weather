import { Button } from '@mui/material';
import { curLabel } from '../../common/lang/lang';
import { FC } from 'react';

interface Props {
  onClick: () => void;
}

const ForecastSwitchButton: FC<Props> = ({ onClick }) => {
  return (
    <div>
      <Button sx={{ margin: '10px' }} onClick={onClick} variant='outlined'>
        {curLabel.WeatherDetails.buttonTitle}
      </Button>
    </div>
  );
};

export default ForecastSwitchButton;
