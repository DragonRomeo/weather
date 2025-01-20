import {
  getObjFromLocalStorage,
  setObjToLocalStorage,
  storageName,
} from '../../common/localStorage/localStorage';

export const setDrawerIdToLs = (state: boolean, localStorageId: string) => {
  const obj = getObjFromLocalStorage();
  if (!obj) {
    return;
  }
  obj.drawerStates[localStorageId] = !state;
  setObjToLocalStorage(obj, storageName);
};

export const setStateFromLocalStorage = (
  localStorageId: string,
  setStateCallback: (state: boolean) => void
) => {
  const obj = getObjFromLocalStorage();
  if (!obj) {
    return;
  }
  const isOpen = obj.drawerStates[localStorageId];
  if (isOpen) setStateCallback(true);
};
