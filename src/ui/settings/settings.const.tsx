import { curLabel } from '../../common/lang/lang';
import BasicSelect from '../select/select';
import { changeLanguage } from './settings.helpers';
import { IOption } from './settings.types';

const optionsContent = [
  <BasicSelect
    label={curLabel.SettingsData.TITLE}
    values={curLabel.SettingsData.values}
    callback={changeLanguage}
  />,
];

export const optionsData: Array<IOption> = [
  {
    title: curLabel.SettingsData.TITLE,
    content: optionsContent[0],
  },
];
