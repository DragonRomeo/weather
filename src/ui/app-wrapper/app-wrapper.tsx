import React, { ReactNode } from 'react';
import { mainBgColor } from '../common/styles/consts';
import bgImage from '../../assets/background_image/snow_bg_image.jpg';

type Props = {
  children: ReactNode;
};

const AppWrapper: React.FC<Props> = ({ children }) => {
  console.log(bgImage);
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
