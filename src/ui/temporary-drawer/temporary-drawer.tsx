import { FC, useEffect, useState } from 'react';
import ForecastSwitchButton from '../forecast-switch-button/forecast-switch-button';
import { Box, Drawer, IconButton } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ForecastContainer from '../forecast/forecast.container';
import { drawerProps, styles } from './temporary-drawer.styles';
import {
  setDrawerIdToLs,
  setStateFromLocalStorage,
} from './temporary-drawer.helpers';
import SettingsContainer from '../settings/setting.container';

interface Props {
  localStorageCreateId?: string;
  children: React.ReactNode;
}

const TemporaryDrawer: FC<Props> = ({
  localStorageCreateId = null,
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorageCreateId) {
      setStateFromLocalStorage(localStorageCreateId, setOpen);
    }
  }, []);

  const toggleDrawer = () => () => {
    setOpen((prevState) => !prevState);
    if (localStorageCreateId) {
      // maybe need listener who lauch this code before user close app
      setDrawerIdToLs(open, localStorageCreateId);
    }
  };

  return (
    <Box sx={styles.drawer_container}>
      <Box sx={styles.icons_container}>
        <ForecastSwitchButton onClick={toggleDrawer()} />
        <SettingsContainer />
      </Box>
      <Drawer
        variant='persistent'
        PaperProps={drawerProps.drawer_paper}
        open={open}
        anchor='bottom'
        onClose={toggleDrawer()}
      >
        <Box sx={styles.drawer_header}>
          <Box>
            <IconButton color='primary' size='large' onClick={toggleDrawer()}>
              <ExpandCircleDownIcon fontSize='inherit' />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Drawer>
    </Box>
  );
};

export default TemporaryDrawer;
