export const convertReleaseDateToYear = (date: Date): string =>
  date.toString().split("-")[0];

export const convertMinToHoursAndMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};
