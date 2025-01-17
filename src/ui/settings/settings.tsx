import SettingsIcon from '@mui/icons-material/Settings';
import { optionsData } from './settings.const';
import VerticalTabs from '../vertical-tabs/vertical-tabs';
import MenuButton from '../menu-button/menu-button';

const Settings = () => {
  return (
    <>
      <MenuButton
        icon={<SettingsIcon sx={{ width: '35px', height: '35px' }} />}
      >
        <VerticalTabs options={optionsData} />
      </MenuButton>
    </>
  );
};

export default Settings;
