import React, { ReactNode } from 'react';
import { Container } from './app-container.styles';

type Props = {
  children: ReactNode;
};

const AppContainer: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
