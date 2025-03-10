import { curLabel } from '../../common/lang/lang';
import {
  getObjFromLocalStorage,
  setObjToLocalStorage,
  storageName,
} from '../../common/localStorage/localStorage';
import { lang } from '../../common/types/common';
import { DataLocalStorage } from '../../common/types/DataLocalStorage';

const setChangedLanguageToLocalStorage = (
  obj: DataLocalStorage,
  name: string
) => {
  setObjToLocalStorage(obj, name);
};

interface HashLang {
  [language: string]: lang;
}

const hashLang: HashLang = {
  [curLabel.SettingsData.values[0]]: 'ru',
  [curLabel.SettingsData.values[1]]: 'en',
};

export const changeLanguage = (language: string) => {
  const appStorage = getObjFromLocalStorage();
  const currentLang: lang = hashLang[language];
  if (!appStorage || currentLang === appStorage.language.currentLanguage) {
    return;
  }
  appStorage.language.currentLanguage = currentLang;
  setChangedLanguageToLocalStorage(appStorage, storageName);
  window.location.reload();
};
