import React, { ReactNode } from 'react';
import { mainBgColor } from '../common/styles/consts';

type Props = {
  children: ReactNode;
};

const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ width: '100%', backgroundColor: mainBgColor }}>
      {children}
    </div>
  );
};

export default AppWrapper;
