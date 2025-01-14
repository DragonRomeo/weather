import {
  appLSdata,
  getObjFromLocalStorage,
} from '../localStorage/localStorage';

export const getCurrentLanguage = () => {
  const obj = getObjFromLocalStorage();
  if (!obj) {
    return appLSdata.language.currentLanguage;
  }
  const language = obj.language.currentLanguage;
  return language;
};
