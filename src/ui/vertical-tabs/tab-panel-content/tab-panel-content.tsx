import { Switch, Typography } from '@mui/material';
import React from 'react';
import { Container } from './tab-panel-content.styles';

interface Props {
  name: string;
  onChange?: () => void;
  defaultChecked?: boolean;
}

const TabPanelContent: React.FC<Props> = ({
  name,
  onChange,
  defaultChecked,
}) => {
  return (
    <>
      <Container>
        <Typography>{name}</Typography>
        <Switch defaultChecked={defaultChecked} onChange={onChange} />
      </Container>
    </>
  );
};

export default TabPanelContent;
