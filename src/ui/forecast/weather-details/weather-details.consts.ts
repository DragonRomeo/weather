import humidityIcon from '../../../assets/icons/humidity-icon.svg';
import cloudIcon from '../../../assets/icons/cloud-icon.svg';
import windIcon from '../../../assets/icons/wind-icon.svg';
import temperatureIcon from '../../../assets/icons/temperature-icon.svg';
import { curLabel } from '../../../common/lang/lang';

export const weatherDetailsConsts = {
  title: 'Weather details...',
};

// Icons
export const WeatherDetailsIcons = {
  HumidityIcon: {
    src: humidityIcon,
    width: '18px',
    height: '24px',
  },
  CloudIcon: {
    src: cloudIcon,
    width: '22px',
    height: '22px',
  },
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
    icon: WeatherDetailsIcons.HumidityIcon,
  },
  Cloudy: {
    name: curLabel.WeatherDetails.cloudy.name,
    unitOfMeasure: curLabel.WeatherDetails.cloudy.unitOfMeasure,
    icon: WeatherDetailsIcons.CloudIcon,
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
