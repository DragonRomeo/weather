import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { widgetFontSize } from '../../common/styles/consts';

const DateContainer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '510px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Typography variant='body1' fontSize={widgetFontSize}></Typography>
    </div>
  );
};

export default DateContainer;
