import { getCurrentLanguage } from '../common/lang/lang.helpers';

export const BASE_URL = 'https://api.weatherapi.com/v1/';
export const API_KEY = '19d22d45066d4d1589b124006241209';
export const METHOD = 'forecast.json';
export const DAYS = '2'; // 3 is maximum day for free usage
export const lang = getCurrentLanguage();
