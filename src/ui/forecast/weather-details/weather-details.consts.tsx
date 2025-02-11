import windIcon from '../../../assets/icons/wind-icon.svg';
import temperatureIcon from '../../../assets/icons/temperature-icon.svg';
import { curLabel } from '../../../common/lang/lang';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';

export const weatherDetailsConsts = {
  title: 'Weather details...',
};

// Icons
export const WeatherDetailsIcons = {
  WindIcon: {
    src: windIcon,
    width: '24px',
    height: '19px',
  },
  TemperatureIcon: {
    src: temperatureIcon,
    width: '14px',
    height: '26px',
  },
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
    icon: WeatherDetailsIcons.WindIcon,
  },
  FeelsLike: {
    name: curLabel.WeatherDetails.fellsLike.name,
    unitOfMeasure: curLabel.WeatherDetails.fellsLike.unitOfMeasure,
    icon: WeatherDetailsIcons.TemperatureIcon,
  },
};
