import React, { ReactNode } from 'react';
import { Container } from './app-wrapper.styles';

type Props = {
  children: ReactNode;
};

const AppWrapper: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppWrapper;
