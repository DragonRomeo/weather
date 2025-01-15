import { error } from '../../../common/errors/error';
import {
  getObjFromLocalStorage,
  setObjToLocalStorage,
  storageName,
} from '../../../common/localStorage/localStorage';

export const putTheCityInLocalStorage = (city: string) => {
  const obj = getObjFromLocalStorage();
  if (!obj) {
    return;
  }
  obj.city = city;
  setObjToLocalStorage(obj, storageName);
};

export const getCityFromLocalStorage = () => {
  const obj = getObjFromLocalStorage();
  if (!obj) {
    throw new Error(error.cityUndefined);
  }
  return obj.city;
};
