import { Box, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import BasicPopover from '../basic-popover/basic-popover';
import { styles } from './menu-button.styles';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const MenuButton: FC<Props> = ({ icon, children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box>
      <IconButton
        sx={styles.icon_button}
        aria-label={id}
        size='medium'
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <BasicPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box sx={styles.content}>{children}</Box>
      </BasicPopover>
    </Box>
  );
};

export default MenuButton;
