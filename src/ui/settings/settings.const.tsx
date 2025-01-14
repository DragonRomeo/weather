import BasicSelect from '../select/select';
import { changeLanguage } from './settings.helpers';
import { IOption } from './settings.types';

const optionsContent = [
  <BasicSelect
    label={'Language'}
    values={['russian', 'english']}
    callback={changeLanguage}
  />,
];

export const optionsData: Array<IOption> = [
  {
    title: 'language',
    content: optionsContent[0],
  },
];
