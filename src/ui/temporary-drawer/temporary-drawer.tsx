import { useState } from 'react';
import ForecastSwitchButton from '../forecast-switch-button/forecast-switch-button';
import { Drawer, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ForecastContainer from '../forecast/forecast.container';
import { DrawerHeader } from './temporary-drawer.styles';

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <ForecastSwitchButton onClick={toggleDrawer(true)} />
      <Drawer
        variant='persistent'
        PaperProps={{
          style: { width: '50vh', backgroundColor: 'inherit' },
        }}
        open={open}
        anchor='right'
        onClose={toggleDrawer(false)}
      >
        <DrawerHeader>
          <div>
            <IconButton
              color='primary'
              size='large'
              onClick={toggleDrawer(false)}
            >
              <ChevronRightIcon fontSize='inherit' />
            </IconButton>
          </div>
          <ForecastContainer />
        </DrawerHeader>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
