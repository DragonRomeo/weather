import React, { ReactNode } from 'react';
import bgImage from '../../assets/background_image/snow_bg_image.jpg';

type Props = {
  children: ReactNode;
};

const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
