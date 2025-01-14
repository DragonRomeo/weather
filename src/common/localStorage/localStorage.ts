import { lang } from '../types/common';
import { DataLocalStorage } from '../types/DataLocalStorage';

export const languages: ILanguages = {
  ru: 'ru',
  en: 'en',
};

interface ILanguages {
  ru: lang;
  en: lang;
}

export const appLSdata: DataLocalStorage = {
  language: {
    currentLanguage: languages.ru,
  },
};

export const storageName = 'weatherApp';

const initObjToLocalStorage = (obj: DataLocalStorage, storageName: string) => {
  const storage = localStorage.getItem(storageName);
  if (storage) {
    return;
  }
  localStorage.setItem(storageName, JSON.stringify(obj));
};

export const initLocalStorage = () => {
  initObjToLocalStorage(appLSdata, storageName);
};

export const getObjFromLocalStorage = (): DataLocalStorage | false => {
  const storage = localStorage.getItem(storageName);
  if (!storage) {
    return false;
  }
  return JSON.parse(storage);
};

export const setObjToLocalStorage = (
  obj: DataLocalStorage,
  storageName: string
) => {
  const storage = localStorage.getItem(storageName);
  if (!storage) {
    return;
  }
  localStorage.setItem(storageName, JSON.stringify(obj));
};