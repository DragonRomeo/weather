import { curLabel } from '../../../common/lang/lang';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

export const weatherDetailsConsts = {
  title: 'Weather details...',
};

export const WeatherItems = {
  Humidity: {
    name: curLabel.WeatherDetails.humidity.name,
    unitOfMeasure: curLabel.WeatherDetails.humidity.unitOfMeasure,
    icon: <WaterDropOutlinedIcon />,
  },
  Cloudy: {
    name: curLabel.WeatherDetails.cloudy.name,
    unitOfMeasure: curLabel.WeatherDetails.cloudy.unitOfMeasure,
    icon: <FilterDramaOutlinedIcon />,
  },
  Wind: {
    name: curLabel.WeatherDetails.wind.name,
    unitOfMeasure: curLabel.WeatherDetails.wind.unitOfMeasure,
    icon: <AirOutlinedIcon />,
  },
  FeelsLike: {
    name: curLabel.WeatherDetails.fellsLike.name,
    unitOfMeasure: curLabel.WeatherDetails.fellsLike.unitOfMeasure,
    icon: <DeviceThermostatOutlinedIcon />,
  },
};
