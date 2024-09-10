import React, { ReactNode } from 'react';
import {
  mainBgColor,
  mainTextColor,
  windowMinWidth,
} from '../common/styles/consts';

type Props = {
  children: ReactNode;
};

const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainBgColor,
        color: mainTextColor,
        padding: 0,
        width: '100%',
        minWidth: windowMinWidth,
        minHeight: '100vh',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default AppContainer;
