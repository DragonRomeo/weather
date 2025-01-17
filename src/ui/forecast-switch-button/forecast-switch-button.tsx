import { Button } from '@mui/material';
import { curLabel } from '../../common/lang/lang';

const ForecastSwitchButton = () => {
  return (
    <div>
      <Button sx={{ margin: '10px' }} variant='outlined'>
        {curLabel.WeatherDetails.buttonTitle}
      </Button>
    </div>
  );
};

export default ForecastSwitchButton;
