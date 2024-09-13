import { useEffect, useState } from 'react';

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
      DateContainer
    </div>
  );
};

export default DateContainer;
