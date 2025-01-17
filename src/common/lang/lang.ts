import { lang } from '../types/common';
import { getCurrentLanguage } from './lang.helpers';

const labels = {
  en: {
    // TODO: сделать данные о месяцах полными и обрезать в самом компоненте.
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    daysOfWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    InputCity: {
      LABEL: 'Search Location',
    },
    WeatherDetails: {
      TITLE: 'Weather details...',
      buttonTitle: 'Weather Details', 
      humidity: { name: 'humidity', unitOfMeasure: '%' },
      cloudy: { name: 'cloudy', unitOfMeasure: '%' },
      wind: { name: 'wind', unitOfMeasure: 'km/h' },
      fellsLike: { name: 'feels like', unitOfMeasure: '°' },
    },
  },
  ru: {
    months: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    daysOfWeek: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
    InputCity: {
      LABEL: 'Введите город',
    },
    WeatherDetails: {
      TITLE: 'Подробная информация о погоде...',
      buttonTitle: 'Информация о погоде', 
      humidity: { name: 'влажность', unitOfMeasure: '%' },
      cloudy: { name: 'облачность', unitOfMeasure: '%' },
      wind: { name: 'ветер', unitOfMeasure: 'км/ч' },
      fellsLike: { name: 'ощущается как', unitOfMeasure: '°' },
    },
  },
};

export const languageSelection = (lang: lang) => {
  return labels[lang];
};

const currentLanguage = getCurrentLanguage();
export const curLabel = languageSelection(currentLanguage);
