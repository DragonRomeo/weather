import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import BasicPopover from '../basic-popover/basic-popover';
import { Content, Wrapper } from './settings.styles';
import { optionsData } from './settings.const';
import VerticalTabs from '../vertical-tabs/vertical-tabs';

const Settings = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  //TODO: setting should save state of toggle in local storage
  return (
    <Wrapper>
      <IconButton aria-label={id} size='medium' onClick={handleClick}>
        {/* TODO: move styles from SettingsIcons to styles */}
        <SettingsIcon sx={{ width: '35px', height: '35px' }} />
      </IconButton>
      <BasicPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Content>
          <VerticalTabs options={optionsData} />
        </Content>
      </BasicPopover>
    </Wrapper>
  );
};

export default Settings;
