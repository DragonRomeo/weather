import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AppWrapper: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppWrapper;
