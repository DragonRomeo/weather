import React from 'react';
import { IWeather } from '../../common/types/IWeather';

type Props = {
  weather: IWeather | undefined;
};

const Widget: React.FC<Props> = (
  {
    /* weather */
  }
) => {
  // Takes data only from 'father'
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}
    ></div>
  );
};

export default Widget;
