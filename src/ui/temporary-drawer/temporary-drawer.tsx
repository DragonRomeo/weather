import { FC, useEffect, useState } from 'react';
import ForecastSwitchButton from '../forecast-switch-button/forecast-switch-button';
import { Drawer, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ForecastContainer from '../forecast/forecast.container';
import { DrawerHeader } from './temporary-drawer.styles';
import {
  setDrawerIdToLs,
  setStateFromLocalStorage,
} from './temporary-drawer.helpers';

interface Props {
  localStorageCreateId?: string;
}

const TemporaryDrawer: FC<Props> = ({ localStorageCreateId = null }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorageCreateId) {
      setStateFromLocalStorage(localStorageCreateId, setOpen);
    }
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (localStorageCreateId) {
      // maybe need listener who lauch this code before user close app
      setDrawerIdToLs(open, localStorageCreateId);
    }
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
