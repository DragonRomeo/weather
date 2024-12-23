import React from 'react';
import WeatherIcon from '../../../widget/weatherIcon/weather-icon';
import { capitalize } from '../../../../common/helpers/string';
import { Container, TemperatureContainer } from './weather-item.styles';
import { IIconItem } from './weather-item.types';

type Props = {
  name: string;
  unitOfMeasure?: string;
  value: number;
  icon?: IIconItem;
};

const WeatherItem: React.FC<Props> = ({ name, unitOfMeasure, value, icon }) => {
  return (
    <Container>
      <h5>{capitalize(name)}</h5>
      <TemperatureContainer>
        <div>
          <h4>{value}</h4>
          <p>{unitOfMeasure}</p>
        </div>
        {icon && (
          <WeatherIcon
            icon={icon.src}
            width={icon.width}
            height={icon.height}
          />
        )}
      </TemperatureContainer>
    </Container>
  );
};

export default WeatherItem;
