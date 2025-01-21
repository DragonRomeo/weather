export const getMetersPerSecond = (kph: number): number => {
  const metersInKm = 1000;
  const secondsInHour = 3600;
  const metersInSecond = (kph * metersInKm) / secondsInHour;
  return Math.floor(metersInSecond * 10) / 10;
};
