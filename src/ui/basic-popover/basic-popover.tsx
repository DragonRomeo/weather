import { Popover } from '@mui/material';
import React from 'react';

type Props = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  children: React.ReactNode;
};

const BasicPopover: React.FC<Props> = ({
  id,
  open,
  anchorEl,
  onClose,
  children,
}) => {
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </>
  );
};

export default BasicPopover;
