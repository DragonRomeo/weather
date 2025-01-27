import { Box } from '@mui/material';

import { styles } from './weather-box.styles';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const WeatherBox: FC<Props> = ({ children }) => {
  return <Box sx={styles.box_container}>{children}</Box>;
};

export default WeatherBox;
