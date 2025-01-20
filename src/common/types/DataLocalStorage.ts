import { lang } from './common';

export interface DataLocalStorage {
  language: {
    currentLanguage: lang;
  };
  city: string;
  drawerStates: {
    [key: string]: boolean;
  };
}
